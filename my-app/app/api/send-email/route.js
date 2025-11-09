
import { Resend } from 'resend';

export async function POST(request) {
  
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Clé API Resend manquante" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: 'Portfolio <contact@mellcanac.dev>',
      to: 'mell.canac@epitech.eu',
      subject: `Message de ${name}`,
      text: `De: ${email}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}