import React from 'react';
import { Mail, Phone, Youtube, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#1a0a2b] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-semibold text-white mb-6">
              БУКИНГ & <br/><span className="text-brand-accent">КОНТАКТЫ</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Доступны для фестивалей, корпоративных мероприятий и частных шоу. 
              Grimerka96 приносит шум.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white hover:text-brand-accent transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brand-accent/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest">Email</span>
                  <span className="font-display text-lg">booking@grimerka96.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white hover:text-brand-accent transition-colors cursor-pointer group">
                 <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brand-accent/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-widest">Телефон</span>
                  <span className="font-display text-lg">+7 (999) 000-96-96</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
             <form className="space-y-6 bg-brand-gray/10 p-8 border border-white/5 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Имя</label>
                    <input type="text" className="w-full bg-brand-black border-b border-white/20 p-2 text-white focus:outline-none focus:border-brand-accent transition-colors rounded-t" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Телефон</label>
                    <input type="text" className="w-full bg-brand-black border-b border-white/20 p-2 text-white focus:outline-none focus:border-brand-accent transition-colors rounded-t" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-brand-black border-b border-white/20 p-2 text-white focus:outline-none focus:border-brand-accent transition-colors rounded-t" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full bg-brand-black border-b border-white/20 p-2 text-white focus:outline-none focus:border-brand-accent transition-colors rounded-t"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-white text-brand-black font-semibold font-display uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] rounded-lg">
                  Отправить
                </button>
             </form>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
        <p>© 2025 GRIMERKA96. ВСЕ ПРАВА ЗАЩИЩЕНЫ. СОЗДАНО ДЛЯ АНДЕГРАУНДА.</p>
      </div>
    </section>
  );
};

export default Contact;