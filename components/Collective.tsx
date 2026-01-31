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
  const [selectedMember, setSelectedMember] = React.useState<Member | null>(null);

  const members: Member[] = [
    {
      id: 1,
      name: 'Валерий Волошин',
      role: 'Худ. Рук., Зачинатель',
      description: 'Мастер ритма с 1996 года. Создатель уникального звука Grimerka96.',
      photoUrl: '/image/VV.webp'
    },
    {
      id: 2,
      name: 'Глеб Пестриков',
      role: 'Участник',
      description: 'Ударные инструменты',
      photoUrl: '/image/Gleb.webp'
    },
    {
      id: 3,
      name: 'Мария Пономарева',
      role: 'Участник',
      description: 'Перкуссия и ритм',
      photoUrl: '/image/MaryaPon.webp'
    },
    {
      id: 4,
      name: 'Константин Кузнецов',
      role: 'Участник',
      description: 'Барабанные партии',
      photoUrl: '/image/KonstantinKuz.webp'
    },
    {
      id: 5,
      name: 'Лисичкина Вероника',
      role: 'Участник',
      description: 'Перкуссия',
      photoUrl: '/image/VeronikaLis.webp'
    },
    {
      id: 6,
      name: 'Татьяна Кригер',
      role: 'Участник',
      description: 'Ритм-секция',
      photoUrl: '/image/TatyanaKr.webp'
    },
    {
      id: 7,
      name: 'Артем Полехин',
      role: 'Участник',
      description: 'Ударные',
      photoUrl: '/image/ArtemPol.webp'
    }
  ];

  return (
    <section id="collective" className="py-32 bg-[#1a0a2b] relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

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
            Мастера ритма, объединенные одной целью — создавать незабываемые звуковые переживания.
          </p>
        </div>

        {/* Members Grid - Made larger by capping at 3 columns instead of 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4">
          {members.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative bg-brand-gray/10 border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:bg-brand-gray/20 hover:border-brand-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] cursor-pointer"
            >
              {/* Decorative Corner */}
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/20 rounded-tl-lg group-hover:border-brand-accent transition-colors"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/20 rounded-br-lg group-hover:border-brand-accent transition-colors"></div>

              {/* Member Avatar */}
              {member.photoUrl ? (
                <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-brand-accent/30 group-hover:border-brand-accent transition-colors overflow-hidden shadow-lg">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-accent/20 to-purple-600/20 border-4 border-brand-accent/30 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <Users className="w-16 h-16 text-brand-accent/50 group-hover:text-brand-accent transition-colors" />
                </div>
              )}

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {member.name}
                </h3>
                <div className="inline-block px-4 py-1.5 mb-4 bg-brand-accent/10 border border-brand-accent/30 rounded-full">
                  <span className="text-sm text-brand-accent font-semibold tracking-wider uppercase">
                    {member.role}
                  </span>
                </div>
                <p className="text-base text-gray-400 leading-relaxed line-clamp-2">
                  {member.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs text-white uppercase tracking-widest border-b border-white/30 pb-0.5">Подробнее</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl text-center group hover:bg-brand-accent/5 hover:border-brand-accent/30 transition-all duration-300">
            <Users className="w-8 h-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-semibold text-white mb-1">07</div>
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

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setSelectedMember(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#1f0d2e] border border-white/10 rounded-3xl w-full max-w-4xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-scale-in">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
            >
              <div className="w-6 h-6 text-white relative flex items-center justify-center">
                <span className="absolute w-full h-0.5 bg-white rotate-45 transform"></span>
                <span className="absolute w-full h-0.5 bg-white -rotate-45 transform"></span>
              </div>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-accent/20 group">
                {selectedMember.photoUrl ? (
                  <img
                    src={selectedMember.photoUrl}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-brand-gray/20 flex items-center justify-center">
                    <Users className="w-24 h-24 text-brand-accent/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
              </div>

              <div className="text-left">
                <div className="inline-block px-4 py-1.5 mb-6 bg-brand-accent/10 border border-brand-accent/30 rounded-full">
                  <span className="text-sm text-brand-accent font-semibold tracking-wider uppercase">
                    {selectedMember.role}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                  {selectedMember.description}
                </p>

                <div className="flex gap-4">
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-white mb-1">96</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Style</span>
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-white mb-1">∞</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Energy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Collective;

