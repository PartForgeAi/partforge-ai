 import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        <div className="mb-6 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
          AI Mechanical Design Engineer
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Design functional 3D-printable parts in minutes.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Describe the part you need. PartForge AI asks only the important
          questions, then prepares a printable engineering design.
        </p>

        <div className="mt-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
          <textarea
            className="min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-[#111827] p-5 text-lg text-white outline-none placeholder:text-gray-500"
            placeholder="Example: Design a wall bracket for a Dyson V15 vacuum"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-gray-400">
              STL • STEP • 3MF • Parametric editing later
            </div>

            <button className="rounded-xl bg-blue-600 px-7 py-3 font-medium text-white hover:bg-blue-500">
              Generate design
            </button>
          </div>
        </div>

        <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold">Fast start</h3>
            <p className="mt-2 text-sm text-gray-400">
              Users can describe a part within 5 seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold">Smart questions</h3>
            <p className="mt-2 text-sm text-gray-400">
              Ask less, but ask the details that matter.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold">Functional parts</h3>
            <p className="mt-2 text-sm text-gray-400">
              Brackets, hooks, mounts, clips, holders and enclosures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}