'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { site } from '@/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

const ROLES = ['Student', 'Researcher', 'Faculty', 'Institution'] as const;
const STAGES = [
  'Proposal',
  'Literature review',
  'Data',
  'Drafting',
  'Revision',
  'Not sure',
] as const;

type Values = {
  name: string;
  email: string;
  phone: string;
  role: string;
  stage: string;
  message: string;
  deadline: string;
  website: string;
};

const EMPTY: Values = {
  name: '',
  email: '',
  phone: '',
  role: '',
  stage: '',
  message: '',
  deadline: '',
  website: '',
};

function validate(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Please tell us your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10)
    errors.message = 'A sentence or two about where you’re stuck helps us reply usefully.';
  return errors;
}

const fieldBase =
  'w-full rounded-xl border bg-paper-50 px-4 py-3 text-[0.95rem] text-ink-900 transition-colors duration-200 placeholder:text-ink-300 focus:outline-none focus-visible:outline-none';

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const first = document.getElementById(`${uid}-${Object.keys(nextErrors)[0]}`);
      first?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        // Only clear the form once we know the message is safely away.
        setStatus('sent');
        setValues(EMPTY);
        return;
      }

      if (data.errors) setErrors(data.errors);
      setServerError(
        data.error ?? 'Some details need another look — see the highlighted fields.',
      );
      setStatus('error');
    } catch {
      setServerError(
        `We couldn’t reach the server. Please try again, or WhatsApp us on ${site.phoneDisplay}.`,
      );
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-col items-start rounded-2xl border border-brand-200 bg-brand-50 p-9 md:p-12"
        role="status"
        aria-live="polite"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="mt-7 font-display text-[1.75rem] leading-snug text-brand-900">
          Thank you — your message is with us.
        </h2>
        <p className="mt-4 max-w-md text-[1rem] leading-[1.8] text-brand-800">
          We read every enquiry ourselves and reply within one business day. If your deadline
          is tighter than that, call or WhatsApp us on{' '}
          <a href={site.phoneHref} className="link-underline font-medium">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-[0.88rem] font-medium text-brand-700 underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-paper-300 bg-paper-100 p-7 md:p-10"
    >
      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Leave this field empty</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set('website')(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${uid}-name`}
          label="Your name"
          required
          error={errors.name}
          value={values.name}
          onChange={set('name')}
          autoComplete="name"
          placeholder="Dr Amina Khan"
        />
        <Field
          id={`${uid}-email`}
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={set('email')}
          autoComplete="email"
          placeholder="you@university.edu"
        />
        <Field
          id={`${uid}-phone`}
          label="Phone / WhatsApp"
          hint="Optional"
          value={values.phone}
          onChange={set('phone')}
          autoComplete="tel"
          placeholder="+92 300 0000000"
        />
        <Field
          id={`${uid}-deadline`}
          label="Deadline"
          hint="Optional"
          type="date"
          value={values.deadline}
          onChange={set('deadline')}
        />

        <SelectField
          id={`${uid}-role`}
          label="I am a…"
          value={values.role}
          onChange={set('role')}
          options={ROLES}
          placeholder="Select one"
        />
        <SelectField
          id={`${uid}-stage`}
          label="Current stage"
          value={values.stage}
          onChange={set('stage')}
          options={STAGES}
          placeholder="Select one"
        />

        <div className="sm:col-span-2">
          <Field
            id={`${uid}-message`}
            label="Where are you stuck?"
            required
            textarea
            error={errors.message}
            value={values.message}
            onChange={set('message')}
            placeholder="A messy reference list, an unfinished chapter, a dataset that needs cleaning…"
          />
        </div>
      </div>

      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              role="alert"
              className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[0.9rem] leading-relaxed text-red-800"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              {serverError}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
        <p className="text-[0.82rem] text-ink-400">
          We reply within one business day. Your details are never shared.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  textarea,
  type = 'text',
  value,
  onChange,
  ...rest
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type' | 'id'>) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3">
        <span className="text-[0.85rem] font-medium text-ink-700">
          {label}
          {required && <span className="ml-1 text-brand-600">*</span>}
        </span>
        {hint && <span className="text-[0.75rem] text-ink-400">{hint}</span>}
      </label>
      <Tag
        id={id}
        name={id}
        {...(textarea ? { rows: 6 } : { type })}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldBase,
          'mt-2',
          textarea && 'resize-y leading-[1.7]',
          error
            ? 'border-red-300 focus:border-red-500'
            : 'border-paper-300 focus:border-brand-500',
        )}
        {...(rest as Record<string, unknown>)}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-red-700"
          >
            <AlertCircle className="size-3.5" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3">
        <span className="text-[0.85rem] font-medium text-ink-700">{label}</span>
        <span className="text-[0.75rem] text-ink-400">Optional</span>
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          'mt-2 appearance-none border-paper-300 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 focus:border-brand-500',
          value ? 'text-ink-900' : 'text-ink-300',
        )}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236a769f' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
