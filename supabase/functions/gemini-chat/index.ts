import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const { history, systemPrompt } = await req.json();

    // ── Claude Haiku 4.5 (active while Gemini is down) ──────────────────────
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');

    // Convert Gemini history format (role: 'model', parts) to Claude format
    const messages = history.map((msg: { role: string; parts: { text: string }[] }) => ({
      role: msg.role === 'model' ? 'assistant' : 'user',
      content: msg.parts[0].text,
    }));

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 350,
        system: systemPrompt,
        messages,
      }),
    });

    const data = await response.json();
    const text = data.content?.[0]?.text;

    if (!text) throw new Error('Empty response from Claude');
    // ── End Claude ───────────────────────────────────────────────────────────

    // ── Gemini 2.5 Flash (switch back when Google is up) ────────────────────
    // const apiKey = Deno.env.get('GEMINI_API_KEY');
    //
    // const response = await fetch(
    //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       system_instruction: { parts: [{ text: systemPrompt }] },
    //       contents: history,
    //       generationConfig: {
    //         maxOutputTokens: 350,
    //         temperature: 0.9,
    //         thinkingConfig: { thinkingBudget: 0 },
    //       },
    //     }),
    //   }
    // );
    //
    // const data = await response.json();
    // const parts = data.candidates?.[0]?.content?.parts ?? [];
    // const text = parts.find((p: { thought?: boolean; text?: string }) => !p.thought)?.text;
    //
    // if (!text) throw new Error('Empty response from Gemini');
    // ── End Gemini ───────────────────────────────────────────────────────────

    return new Response(JSON.stringify({ text }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
});
