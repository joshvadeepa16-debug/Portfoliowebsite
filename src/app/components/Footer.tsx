export function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          <span className="text-white font-bold">Joshva</span> - Web Developer
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with passion and precision.
        </p>
      </div>
    </footer>
  );
}
