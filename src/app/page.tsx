import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js", "React Native"],
  },
  {
    title: "Backend",
    items: ["TypeScript", "NestJS", "REST APIs", "OpenAPI / Swagger", "SQL & NoSQL"],
  },
  {
    title: "Practice",
    items: ["Git / GitHub", "Supertest", "Agile / Scrum", "UI/UX", "Technical docs"],
  },
];

const timeline = [
  { year: "2020", title: "Started engineering & finance", text: "Began Software Engineering at Mekelle University and Accounting & Finance at Sheba University College." },
  { year: "2025", title: "Frontend at MeMi Trading", text: "Shipped Zemen Bazaar UI and payment checkout on Next.js." },
  { year: "2026", title: "Backend for TRMS", text: "Built NestJS APIs for the Tigray Referral Management System." },
  { year: "2026", title: "YOSAM interfaces", text: "Responsive React dashboards for energy, mobility, and digital services." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="top" className="hero-glow relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
            <div>
              <p className="text-sm text-mute">Hello, I’m</p>
              <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
                Bety Gebremeskel
              </h1>
              <p className="mt-4 text-xl font-medium text-accent">
                Full-Stack Software Engineer
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-mute">
                Building responsive products and reliable APIs at the intersection
                of web engineering, payments, and healthcare systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-btn-text hover:opacity-90"
                >
                  Contact me
                </a>
                <a
                  href="#projects"
                  className="rounded-xl border border-line px-5 py-3 text-sm font-medium text-ink hover:border-accent"
                >
                  View projects
                </a>
              </div>
            </div>
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-accent/40 shadow-lg sm:h-72 sm:w-72">
              <Image
                src="/bety.jpg"
                alt="Bety Gebremeskel"
                width={288}
                height={288}
                priority
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-line bg-bg-2">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="text-sm font-medium text-accent">About</p>
            <p className="mt-4 max-w-3xl leading-8 text-mute">
              Final-year Software Engineering student at Mekelle University, also
              trained in Accounting &amp; Finance. I work in agile teams on
              component-driven UI, typed NestJS services, and OpenAPI contracts —
              especially where payments or patient workflows need to be trustworthy.
            </p>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item) => (
                <li
                  key={item.title}
                  className="premium-card min-w-0 rounded-lg border p-4 sm:p-5"
                >
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-medium text-accent">Skills</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Technical expertise
          </h2>
          <p className="mt-3 text-mute">
            Tools I use to design, build, and test full-stack products.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="premium-card min-w-0 rounded-lg border p-4 sm:p-6"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-bg-2 px-3 py-1.5 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="premium-card mt-6 min-w-0 rounded-lg border p-4 sm:p-6">
            <h3 className="font-semibold">Languages</h3>
            <p className="mt-2 text-sm text-mute">
              Tigrigna (mother tongue) · Amharic C2 · English C1/C2
            </p>
          </div>
        </section>

        <Projects />

        <section id="education" className="border-t border-line bg-bg-2">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="text-sm font-medium text-accent">Education</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Academic foundation
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
              <article className="premium-card min-w-0 rounded-lg border p-5 sm:p-7">
                <p className="text-sm text-accent">Sep 2020 — present</p>
                <h3 className="mt-3 text-xl font-semibold">
                  Software Engineering
                </h3>
                <p className="mt-1 text-mute">Mekelle University · Mekelle, Ethiopia</p>
                <p className="mt-4 text-sm leading-7 text-mute">
                  Data structures, algorithms, software architecture, system
                  analysis &amp; design, testing, full-stack web development, and
                  AI integration in applications.
                </p>
              </article>
              <article className="premium-card min-w-0 rounded-lg border p-5 sm:p-7">
                <p className="text-sm text-accent">Oct 2020 — Jul 2026</p>
                <h3 className="mt-3 text-xl font-semibold">
                  BA, Accounting &amp; Finance
                </h3>
                <p className="mt-1 text-mute">Sheba University College · Mekelle, Ethiopia</p>
                <p className="mt-4 text-sm leading-7 text-mute">
                  Financial reporting, managerial accounting, corporate finance,
                  auditing, taxation, and business law — useful for payment and
                  operations products.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-medium text-accent">Contact</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let’s connect</h2>
          <p className="mt-3 max-w-2xl text-mute">
            Open to full-stack roles and product work. Email, call, or send a
            short message.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-mute">Email</p>
                <a
                  className="text-accent hover:underline"
                  href="mailto:betygebremeskel12@gmail.com"
                >
                  betygebremeskel12@gmail.com
                </a>
              </li>
              <li>
                <p className="text-mute">Phone</p>
                <a href="tel:+251985008914">+251 985 008 914</a>
              </li>
              <li>
                <p className="text-mute">Location</p>
                <p>Addis Ababa, Ethiopia</p>
              </li>
            </ul>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} Bety Gebremeskel
      </footer>
    </>
  );
}
