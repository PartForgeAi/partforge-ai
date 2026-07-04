export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="text-xl font-bold tracking-tight">PartForge AI</div>

      <div className="hidden gap-8 text-sm text-gray-300 md:flex">
        <a href="#">How it works</a>
        <a href="#">Examples</a>
        <a href="#">Pricing</a>
      </div>

      <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10">
        Sign in
      </button>
    </nav>
  );
}