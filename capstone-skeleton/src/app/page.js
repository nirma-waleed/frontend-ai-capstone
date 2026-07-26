import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Frontend AI Engineering
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Capstone Skeleton
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            This is the Frontend AI Engineering capstone skeleton project, built with Next.js and Tailwind CSS for rapid app development.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
