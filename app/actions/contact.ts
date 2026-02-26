"use server";

export type FormState = {
  success: boolean;
  error?: string;
} | null;

export async function sendQuote(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const address = (formData.get("address") as string)?.trim();
  const stumps = formData.get("stumps") as string;
  const size = formData.get("size") as string;
  const message = (formData.get("message") as string)?.trim();

  if (!name || !phone || !address || !stumps || !size) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return {
      success: false,
      error: "Service temporarily unavailable. Please call us directly.",
    };
  }

  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const lines = [
    "🌲 <b>New Quote Request</b>",
    "",
    `👤 <b>Name:</b> ${name}`,
    `📞 <b>Phone:</b> ${phone}`,
    email ? `📧 <b>Email:</b> ${email}` : null,
    `📍 <b>Address:</b> ${address}`,
    `🌳 <b>Stumps:</b> ${stumps}`,
    `📏 <b>Size:</b> ${size}`,
    message ? `💬 <b>Notes:</b> ${message}` : null,
    "",
    `⏰ <b>Sent:</b> ${now} PST`,
  ];

  const text = lines.filter(Boolean).join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    },
  );

  if (!res.ok) {
    console.error("Telegram API error:", await res.text());
    return {
      success: false,
      error: "Failed to send your request. Please call us directly.",
    };
  }

  return { success: true };
}
