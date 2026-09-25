"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio inquiry");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`,
    );
    window.location.href = `mailto:betygebremeskel12@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        name="name"
        required
        placeholder="Name"
        className="rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <input
        name="subject"
        placeholder="Subject"
        className="rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        className="rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:border-accent"
      />
      <button
        type="submit"
        className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-btn-text hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}
