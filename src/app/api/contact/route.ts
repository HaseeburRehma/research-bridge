import { NextResponse } from 'next/server';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const ROLES = ['Student', 'Researcher', 'Faculty', 'Institution'] as const;
const STAGES = [
  'Proposal',
  'Literature review',
  'Data',
  'Drafting',
  'Revision',
  'Not sure',
] as const;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  role?: unknown;
  stage?: unknown;
  message?: unknown;
  deadline?: unknown;
  /** Honeypot — must stay empty. */
  website?: unknown;
};

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: silently accept so bots do not learn they were caught.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const role = str(body.role);
  const stage = str(body.stage);
  const message = str(body.message);
  const deadline = str(body.deadline);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please tell us your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (message.length < 10) errors.message = 'A sentence or two about where you’re stuck helps us reply usefully.';
  if (role && !ROLES.includes(role as (typeof ROLES)[number])) errors.role = 'Please choose one of the options.';
  if (stage && !STAGES.includes(stage as (typeof STAGES)[number])) errors.stage = 'Please choose one of the options.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not set — contact form submission dropped.');
    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact form is not fully configured yet. Please call or WhatsApp us on +92 333 9381201 and we will reply the same day.',
      },
      { status: 503 },
    );
  }

  const upstream = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry from ${name} — Research Bridge`,
      from_name: 'Research Bridge website',
      replyto: email,
      name,
      email,
      phone: phone || '—',
      'I am a': role || '—',
      'Current stage': stage || '—',
      Deadline: deadline || '—',
      message,
    }),
  }).catch(() => null);

  if (!upstream || !upstream.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not send that just now. Please try again, or reach us on +92 333 9381201.',
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
