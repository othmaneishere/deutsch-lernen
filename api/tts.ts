import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const voices = new Set(['de-DE-KatjaNeural', 'de-DE-KillianNeural', 'de-DE-ConradNeural', 'de-DE-AmalaNeural']);

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') return res.status(405).send('Method not allowed');
  const text = String(req.query?.text || '').replace(/\(.*?\)|\[.*?\]/g, '').replace(/[→·|/]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 1200);
  const voice = voices.has(String(req.query?.voice)) ? String(req.query.voice) : 'de-DE-KatjaNeural';
  if (!text) return res.status(400).send('Text parameter is required');
  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const { audioStream } = tts.toStream(text);
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('TTS timeout')), 8000);
      audioStream.on('data', (chunk: Buffer) => chunks.push(chunk));
      audioStream.on('end', () => { clearTimeout(timer); resolve(); });
      audioStream.on('error', (error: Error) => { clearTimeout(timer); reject(error); });
    });
    try { tts.close(); } catch (_) { /* connection already closed */ }
    const audio = Buffer.concat(chunks);
    if (!audio.length) return res.status(502).send('No audio generated');
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', audio.length.toString());
    res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
    res.setHeader('Accept-Ranges', 'bytes');
    return res.status(200).send(audio);
  } catch (error) {
    console.error('TTS function failed:', error);
    return res.status(502).send('German TTS temporarily unavailable');
  }
}
