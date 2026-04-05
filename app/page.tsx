import Image from "next/image";

const GITHUB_URL = "https://github.com/kronoguard";

const linkFocus =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0f1e]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/kg-icon.png"
              alt=""
              width={32}
              height={32}
              className="shrink-0 rounded-sm"
            />
            <span className="text-lg font-semibold tracking-tight text-white">
              KronoGuard
            </span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 text-sm text-muted transition hover:text-accent ${linkFocus}`}
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6">
        <section className="pb-24 pt-24 sm:pt-28">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up">
            The policy plane for your agent fleet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted animate-fade-in-up-delay-1">
            Know not just where your AI agents go, but when. KronoGuard will
            give teams a single place to enforce access policy, control what
            agents can reach, and keep an immutable audit record of what they
            did.
          </p>
        </section>

        <section className="border-t border-white/5 py-20 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The problem
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Production agents fire huge volumes of outbound traffic. Today that
            usually means scattered logs, weak access control, and almost no
            trustworthy story about{" "}
            <span className="text-foreground/90">who</span> did{" "}
            <span className="text-foreground/90">what</span>,{" "}
            <span className="text-foreground/90">when</span>.
          </p>
          <ul className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>
                <strong className="font-medium text-white">Visibility.</strong>{" "}
                Hard to see destinations, timing, and policy fit across many
                agents and services.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>
                <strong className="font-medium text-white">Control.</strong>{" "}
                Rules are often embedded in app code or missing entirely.
                Painful to change and risky to scale.
              </span>
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>
                <strong className="font-medium text-white">Audit.</strong>{" "}
                Logs are easy to alter; there is rarely one defensible record
                you can stand behind for compliance or incident response.
              </span>
            </li>
          </ul>
        </section>

        <section className="border-t border-white/5 py-28 sm:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-8 rounded-full bg-accent/20 animate-pulse-glow"
                aria-hidden
              />
              <Image
                src="/kg-icon.png"
                alt=""
                width={80}
                height={80}
                className="relative rounded-lg animate-icon-float"
              />
            </div>

            <p className="mt-10 font-mono text-sm tracking-widest uppercase animate-shimmer">
              Coming soon
            </p>
            <p className="mt-4 max-w-md text-muted animate-fade-in-up-delay-2">
              We are building the proxy, policy engine, and audit trail that sit
              in front of your agents.
            </p>
            <p className="mt-3 max-w-md text-muted animate-fade-in-up-delay-2">
              Stay tuned!
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center rounded-md border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/10 ${linkFocus}`}
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/kg-icon.png"
              alt=""
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span className="font-medium text-white">KronoGuard</span>
          </div>
          <a
            href="https://kronoguard.io"
            className={`transition hover:text-accent ${linkFocus}`}
          >
            kronoguard.io
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition hover:text-accent ${linkFocus}`}
          >
            GitHub
          </a>
        </div>
        <div className="pb-6 text-center text-xs text-muted/60">
          &copy; {new Date().getFullYear()} KronoGuard. All rights reserved.
        </div>
      </footer>
    </>
  );
}
