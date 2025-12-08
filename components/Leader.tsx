import React from 'react';
import { Award, Music, Star, Briefcase } from 'lucide-react';

const Leader: React.FC = () => {
  return (
    <section id="leader" className="py-24 bg-[#1a0a2b] relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Photo/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group">
              {/* Placeholder for Leader Photo - using a generic drummer image for now if specific one isn't available, or reuse an existing one */}
              <div className="absolute inset-0 bg-brand-accent/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop" 
                alt="Валерий Волошин" 
                className="w-full h-full object-cover filter contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-700" 
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-brand-accent/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <span className="text-white font-display text-xl tracking-wide">ХУД. РУКОВОДИТЕЛЬ</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent/50 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent/50 rounded-br-3xl"></div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5">
                <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">Основатель</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                ВАЛЕРИЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">ВОЛОШИН</span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Профессиональный барабанщик, действующий музыкант и преподаватель ударных со стажем более 25 лет.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Высшее образование — <strong className="text-white">Московский Государственный Университет Культуры и Искусства</strong> (2002 г).
              </p>
              
              <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white font-display text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-accent" />
                  Работа с известными исполнителями:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Вика Цыганова</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Павел Паскаль</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Театр О.Табакова</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Группа "Salut Brass"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Группа "Республика"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Алла Рид</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Ачи Пурцеладзе</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Солисты театра "Градский-Холл"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Участники проекта "Голос"</li>
                </ul>
              </div>

              <p className="italic border-l-4 border-brand-accent pl-4 py-1 bg-gradient-to-r from-brand-accent/5 to-transparent">
                "Год назад родилось Барабанное Шоу Валерия Волошина! Возраст моих учеников от 4 до 60 лет, мы часто выступаем в известных клубах, участвуем в Международных Фестивалях."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                 <Award className="w-4 h-4 text-brand-accent" />
                 <span>25+ лет стажа</span>
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                 <Music className="w-4 h-4 text-brand-accent" />
                 <span>МГИК (2002)</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leader;
