import { Mail, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600">Let's work together on your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Email</div>
                <a href="mailto:hello@joshva.com" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                  hello@joshva.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Phone</div>
                <a href="tel:1234567890" className="text-lg font-medium text-slate-900 hover:text-green-600 transition-colors">
                  1234567890
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-blue-600 text-white rounded-xl">
              <h3 className="text-xl font-bold mb-2">Available for Work</h3>
              <p className="text-blue-100">
                I'm currently accepting new projects and collaborations. 
                Let's create something amazing together!
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
