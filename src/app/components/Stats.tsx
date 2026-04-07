import { Briefcase, Award, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: '30+',
      label: 'Projects Completed',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '98%',
      label: 'Customer Satisfaction',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '100%',
      label: 'Commitment',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Track Record</h2>
          <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
