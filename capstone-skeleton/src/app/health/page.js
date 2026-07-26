async function getHealthData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }
  return response.json();
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Health Check</h1>
        <p className="mt-4 text-lg text-emerald-600">
          Success! The health data was fetched successfully.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
          {JSON.stringify(data, null, 2)}
        </pre>
      </section>
    </main>
  );
}
