import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-6xl font-bold text-slate-900">Hi, I'm <span className="text-blue-600">Joshva</span></h1>
          
          <h2 className="text-3xl text-slate-700">
            Web Developer & Digital Craftsman
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl">
            Creating exceptional web experiences with modern technologies and best practices. 
            Specialized in CSS, web development, and delivering projects that exceed expectations.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
