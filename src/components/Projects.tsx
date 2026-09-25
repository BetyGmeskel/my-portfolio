"use client";

import { useState } from "react";

const projects = [
  {
    category: "Frontend",
    dates: "Jul 2025 — Oct 2025",
    title: "Zemen Bazaar",
    company: "MeMi Trading PLC",
    href: "https://zemenbazaar.com/en",
    image: "/projects/zemen-bazaar.png",
    imageAlt: "Zemen Bazaar homepage with its featured banner and product listings",
    summary:
      "Zemen Bazaar is a multi-category marketplace — “one platform, infinite possibilities” — where buyers and sellers discover products and complete transactions. I built the responsive Next.js storefront and integrated the payment gateway so checkout is secure, with clear status feedback and a smooth path from cart to paid order.",
    tags: ["Next.js", "React", "TypeScript", "Payments", "UI/UX"],
  },
  {
    category: "Backend",
    dates: "Feb 2026 — May 2026",
    title: "TRMS — Tigray Referral Management System",
    company: "Vite Technologies PLC",
    href: "https://trrms.vercel.app",
    image: "/projects/trms-cropped.jpg",
    imageAlt: "TRMS clinical referral portal sign-in screen",
    imageFit: "wide",
    summary:
      "A digital platform that streamlines patient referrals between health facilities in Tigray. It replaces a fragile paper-based process with live coordination for Health Extension Workers, liaison officers, doctors, and administrators — aligned with Ethiopian healthcare standards and data privacy. I designed the NestJS API layer (auth, referral, user, facility), DTOs, OpenAPI/Swagger contract, and end-to-end tests.",
    tags: ["NestJS", "TypeScript", "OpenAPI", "Supertest", "Healthcare"],
  },
  {
    category: "Frontend",
    dates: "May 2026 — Jun 2026",
    title: "YOSAM Mechatronics",
    company: "YOSAM Mechatronics Technology Solutions PLC",
    href: "https://ymt-web-react.vercel.app/",
    image: "/projects/yosam.png",
    imageAlt: "YOSAM intelligent electric transport and fleet technology",
    imageFit: "contain",
    summary:
      "Company site and product surfaces for YOSAM Mechatronics Technology Solutions — covering green energy, intelligent mobility, and digital services. I designed and built responsive React interfaces and reusable dashboard components, working with backend and design in an agile loop.",
    tags: ["React", "Next.js", "Tailwind CSS", "Dashboards"],
  },
];

const filters = ["All", "Frontend", "Backend"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-sm font-medium text-accent">Projects</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Featured work
      </h2>
      <p className="mt-3 max-w-2xl text-mute">
        Live products I contributed to — marketplace payments, healthcare
        referrals in Tigray, and industrial tech interfaces.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-1.5 text-sm ${
              filter === item
                ? "bg-accent text-btn-text"
                : "border border-line text-mute hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.title}
            className="premium-card project-card flex min-w-0 flex-col overflow-hidden rounded-lg border p-3 sm:p-4"
          >
            <div
              className={`w-full overflow-hidden rounded-lg bg-bg-2 ${
                project.imageFit === "wide" ? "aspect-[5/2]" : "aspect-[16/10]"
              }`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`h-full w-full ${
                  project.imageFit === "contain"
                    ? "bg-white object-contain"
                    : "object-cover object-center"
                }`}
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs">
              <span className="rounded-full bg-bg-2 px-2.5 py-1 uppercase tracking-wide text-accent">
                {project.category}
              </span>
              <span className="text-right text-mute">{project.dates}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-mute">{project.company}</p>
            <p className="mt-4 flex-1 text-sm leading-7 text-mute">
              {project.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-bg-2 px-2 py-1 text-xs text-mute"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg hover:bg-accent hover:text-btn-text"
            >
              Live site →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
