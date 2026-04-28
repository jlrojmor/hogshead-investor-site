import { NextResponse } from 'next/server';

const destinationEmail = 'contact@tequila-hogshead.com';

type RequestPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  interest?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  let payload: RequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const interest = clean(payload.interest);
  const message = clean(payload.message);

  if (!name || !email || !interest) {
    return NextResponse.json({ error: 'Please complete name, email, and interest before sending.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: `Email delivery is not configured yet. Please email ${destinationEmail} directly.`,
        missingConfiguration: true,
      },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const subject = `New Hogshead Tequila request — ${interest}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #10272d;">
      <h2 style="margin:0 0 16px;">New Hogshead Tequila website request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company / group:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;border-left:4px solid #d88b42;padding:12px 16px;background:#f7f4ed;">${escapeHtml(message || 'Not provided')}</div>
      <p style="margin-top:18px;color:#63777c;font-size:12px;">Submitted at ${submittedAt}</p>
    </div>
  `;

  const text = [
    'New Hogshead Tequila website request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / group: ${company || 'Not provided'}`,
    `Interest: ${interest}`,
    '',
    'Message:',
    message || 'Not provided',
    '',
    `Submitted at: ${submittedAt}`,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Hogshead Tequila <onboarding@resend.dev>',
      to: [destinationEmail],
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    return NextResponse.json(
      { error: `Email service rejected the request. Please email ${destinationEmail} directly.`, detail },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
