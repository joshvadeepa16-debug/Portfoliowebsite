import { Code2, Palette, FileText } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'CSS Mastery',
      description: 'Expert in modern CSS techniques, animations, and responsive design principles'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building scalable and performant web applications with cutting-edge technologies'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Project Guidelines',
      description: 'Establishing best practices and maintaining code quality standards across projects'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600">What I bring to the table</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors border-2 border-transparent hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
              <p className="text-slate-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
