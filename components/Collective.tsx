import React from 'react';
import { Users, Music, Award, Zap } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  photoUrl?: string;
}

const Collective: React.FC = () => {
  const members: Member[] = [
    {
      id: 1,
      name: 'Валерий Волошин',
      role: 'Основатель & Лидер',
      description: 'Мастер ритма с 1996 года. Создатель уникального звука Grimerka96.',
      photoUrl: undefined // Можно указать путь к фото, например: '/image/member1.jpg'
    },
    {
      id: 2,
      name: 'Алексей Ритмов',
      role: 'Ударные',
      description: 'Специалист по индустриальным перкуссиям и синхронизации.',
      photoUrl: undefined // Можно указать путь к фото, например: '/image/member2.jpg'
    },
    {
      id: 3,
      name: 'Дмитрий Барабан',
      role: 'Ударные',
      description: 'Эксперт по электронным сэмплам и световому шоу.',
      photoUrl: undefined // Можно указать путь к фото, например: '/image/member3.jpg'
    },
    {
      id: 4,
      name: 'Сергей Удар',
      role: 'Ударные',
      description: 'Мастер металлических инструментов и звукового дизайна.',
      photoUrl: undefined // Можно указать путь к фото, например: '/image/member4.jpg'
    }
  ];

  return (
    <section id="collective" className="py-32 bg-[#1a0a2b] relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-md">
            <span className="text-brand-accent text-xs font-semibold tracking-[0.3em] uppercase animate-pulse">Команда</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6 uppercase tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">КОЛЛЕКТИВ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Четыре мастера ритма, объединенные одной целью — создавать незабываемые звуковые переживания.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative bg-brand-gray/10 border border-white/5 p-6 rounded-2xl transition-all duration-500 hover:bg-brand-gray/20 hover:border-brand-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)]"
            >
              {/* Decorative Corner */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/20 rounded-tl-lg group-hover:border-brand-accent transition-colors"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/20 rounded-br-lg group-hover:border-brand-accent transition-colors"></div>

              {/* Member Avatar */}
              {member.photoUrl ? (
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-brand-accent/30 group-hover:border-brand-accent transition-colors overflow-hidden shadow-lg">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-accent/20 to-purple-600/20 border-2 border-brand-accent/30 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <Users className="w-12 h-12 text-brand-accent/50 group-hover:text-brand-accent transition-colors" />
                </div>
              )}

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 mb-3 bg-brand-accent/10 border border-brand-accent/30 rounded-full">
                  <span className="text-xs text-brand-accent font-semibold tracking-wider uppercase">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl text-center group hover:bg-brand-accent/5 hover:border-brand-accent/30 transition-all duration-300">
            <Users className="w-8 h-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-semibold text-white mb-1">04</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Участников</div>
          </div>

          <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl text-center group hover:bg-brand-accent/5 hover:border-brand-accent/30 transition-all duration-300">
            <Music className="w-8 h-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-semibold text-white mb-1">120+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Концертов</div>
          </div>

          <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl text-center group hover:bg-brand-accent/5 hover:border-brand-accent/30 transition-all duration-300">
            <Award className="w-8 h-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-semibold text-white mb-1">28</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Лет опыта</div>
          </div>

          <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl text-center group hover:bg-brand-accent/5 hover:border-brand-accent/30 transition-all duration-300">
            <Zap className="w-8 h-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-semibold text-white mb-1">∞</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Энергии</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collective;

