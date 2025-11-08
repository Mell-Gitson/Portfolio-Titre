import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

   

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: process.env.MY_EMAIL_ADDRESS, 
      subject: `Nouveau message de ${name} via le portfolio`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      
    });

    if (error) {
      console.error("Erreur dans l'API route send-email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("E-mail envoyé avec succès via Resend:", data);
    return NextResponse.json({ message: 'E-mail envoyé avec succès!' }, { status: 200 });
  } catch (error) {
    console.error("Erreur serveur dans l'API route send-email:", error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}