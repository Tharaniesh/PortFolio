import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ui/ButtonLink';
import { contactLinks } from '../data/site';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', message: '' };

function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-cyan-100/75">
              Contact
            </span>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Have a project, concept, or collaboration in mind?</h3>
              <p className="text-sm leading-7 text-slate-300">
                I&apos;m open to creative development work, UI-focused concepts, design execution, and interactive
                portfolio or product experiences. If you&apos;re building something that needs stronger visual structure
                and more intentional motion, let&apos;s talk.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm transition hover:border-cyan-300/25 hover:bg-cyan-300/6"
              >
                <span className="uppercase tracking-[0.2em] text-slate-400">{link.label}</span>
                <span className="text-right text-slate-100">{link.value}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="mailto:tharaniesh46@gmail.com" variant="primary">
              Email Me Directly
            </ButtonLink>
            <ButtonLink href="https://www.linkedin.com/in/tharaniesh-j-1331a9246/" variant="secondary" target="_blank" rel="noreferrer">
              Open LinkedIn
            </ButtonLink>
          </div>
        </div>
      </article>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="surface-panel rounded-[2rem] p-6 sm:p-8"
      >
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-semibold text-white">Send a project inquiry</h3>
          <p className="text-sm leading-7 text-slate-300">
            This form currently validates on the frontend and is ready for backend or email-service integration when
            needed.
          </p>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-2 text-sm">
            <span className="text-slate-200">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/45 focus:bg-white/7"
            />
            {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-slate-200">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/45 focus:bg-white/7"
            />
            {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-slate-200">Message</span>
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="resize-none rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/45 focus:bg-white/7"
            />
            {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-200/60 hover:bg-cyan-300/18"
          >
            Validate Message
          </button>

          {submitted && (
            <p className="text-sm leading-7 text-emerald-300">
              Message details look valid. This form is currently frontend-only and ready to connect to a backend
              handler or email workflow.
            </p>
          )}
        </div>
      </motion.form>
    </div>
  );
}

export default ContactSection;
