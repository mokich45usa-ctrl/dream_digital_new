// Netlify Function: DeepSeek chat proxy
// Expects POST { messages: [{ role: 'user'|'assistant'|'system', content: string }] }
// Returns { reply: string }

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: 'DEEPSEEK_API_KEY is not configured' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const messages = Array.isArray(body.messages) ? body.messages : [];

    if (messages.length === 0) {
      return { statusCode: 400, body: 'messages are required' };
    }

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: body.model || 'deepseek-chat',
        messages,
        stream: false,
        temperature: typeof body.temperature === 'number' ? body.temperature : 0.7,
        max_tokens: typeof body.max_tokens === 'number' ? body.max_tokens : 512
      })
    });

    const data = await response.json();
    if (!response.ok) {
      const message = data?.error?.message || 'DeepSeek API error';
      return { statusCode: response.status, body: message };
    }

    const reply = data?.choices?.[0]?.message?.content || '';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    return { statusCode: 500, body: 'Server error' };
  }
};
