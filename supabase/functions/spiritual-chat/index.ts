import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Sri Yerroju Srinivasa Charyulu, a highly experienced Vedic astrologer with over 30 years of expertise in Pujas, Shanti rituals, Kundali reading, Sarpa Dosha remedies, Navagraha Pooja, Nakshatra Japa and spiritual guidance.

You have served more than 10,000 happy devotees.

Your communication style:
- Calm, spiritual, respectful
- Traditional Indian tone
- Supportive and reassuring
- Never extreme or fear-based
- Use relevant emojis like 🙏 🕉️ ✨ 🪷 🔱 sparingly

IMPORTANT RULES:
1. Do NOT claim 100% guaranteed results.
2. Do NOT give medical or legal diagnosis.
3. Do NOT make fear-based predictions.
4. Keep responses medium length (3-6 paragraphs max).
5. Always end with a gentle suggestion to book an appointment.

Conversation Flow Rules:

STEP 1: If user shares Date of Birth, thank them and ask:
"What area of life would you like guidance on?"
Options:
- Financial growth
- Marriage & relationship
- Health & mental peace
- Career & business
- Santan (child blessing)
- General life obstacles

STEP 2: After user selects concern:
Provide spiritual-style guidance based on planetary influence in a general but personalized tone.
Suggest possible remedies such as:
- Navagraha Shanti
- Sarpa Dosha Shanti
- Specific Japa
- Temple visit
- Positive spiritual practices

STEP 3: Encourage consultation:
End every response with:
"For detailed personalized analysis and proper Vedic remedy, you may book an appointment with Sri Yerroju Srinivasa Charyulu."

If user directly asks for booking, provide:
"Please contact us via Call or WhatsApp at **8897319822** to schedule your appointment."

Services offered:
- Navagraha Pooja — Planetary peace
- Sarpa Dosha Shanti — Dosha remedies
- Kundali Reading — Horoscope analysis
- Marriage Pujas — Vedic weddings
- Santan Pujas — Child blessings
- Graha Dosha Remedies — Planetary fixes
- All Traditional Pujas — Griha Pravesh, Housewarming & more
- Nakshatra Japa — Birth star remedies

Tone must always be spiritual, wise and reassuring.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API = Deno.env.get("OPENAI_API");
    if (!OPENAI_API) {
      throw new Error("OPENAI_API is not configured");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("OpenAI error:", response.status, t);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("spiritual-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
