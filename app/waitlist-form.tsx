"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  if (status === "success") {
    return (
      <p className="mt-8 text-sm font-medium text-accent animate-fade-in-up">
        You are on the list. Check your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-muted/60 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#0a0f1e] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      {status === "error" && (
        <p className="basis-full text-xs text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
