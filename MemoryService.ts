export async function saveMemory(userId: string, message: string) {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/memory`, {
    method: 'POST',
    headers: {
      apikey: process.env.SUPABASE_KEY || '',
      Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      message,
    }),
  });

  return response.json();
        }
