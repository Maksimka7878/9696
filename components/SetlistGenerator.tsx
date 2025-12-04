import React, { useState } from 'react';
    import { generateSetlist } from '../services/geminiService';
    import { SetlistResponse } from '../types';
    import { Sparkles, Music, Lightbulb, Loader2 } from 'lucide-react';
    
    const SetlistGenerator: React.FC = () => {
      const [mood, setMood] = useState('');
      const [result, setResult] = useState<SetlistResponse | null>(null);
      const [loading, setLoading] = useState(false);
      const [hasError, setHasError] = useState(false);
    
      const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mood.trim()) return;
    
        setLoading(true);
        setResult(null);
        setHasError(false);
        
        try {
          const data = await generateSetlist(mood);
          if (data) {
            setResult(data);
          } else {
            setHasError(true);
          }
        } catch (err) {
          setHasError(true);
        } finally {
          setLoading(false);
        }
      };
    
      return (
        <section id="ai-mixer" className="py-24 bg-gradient-to-b from-brand-dark to-brand-black border-t border-white/5 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div>
                <div className="mb-6 flex items-center gap-2 text-brand-accent">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-display tracking-widest text-sm font-semibold">GEMINI AI POWERED</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
                  AI КОМПОЗИТОР <br />РИТМОВ
                </h2>
                <p className="text-gray-400 mb-8">
                  Хочешь уникальный опыт Grimerka96? Опиши нашему ИИ "вайб" (например, "Киберпанк Свадьба", "Подземный Рейв", "Дождливое Воскресенье"), и мы создадим уникальный сет-лист и световую партитуру специально для тебя.
                </p>
    
                <form onSubmit={handleGenerate} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      placeholder="Введите настроение (напр. 'Индустриальный Хаос')..."
                      className="w-full bg-brand-black/50 border border-brand-accent/30 text-white p-4 focus:outline-none focus:border-brand-accent focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all font-display tracking-wide placeholder:text-gray-600 rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !mood}
                    className="w-full bg-brand-accent hover:bg-brand-accentHover disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 tracking-widest transition-all duration-300 flex justify-center items-center gap-2 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> СОЧИНЯЕМ...
                      </>
                    ) : (
                      'СГЕНЕРИРОВАТЬ СЕТ-ЛИСТ'
                    )}
                  </button>
                </form>
                
                {hasError && (
                  <p className="mt-4 text-red-500 text-sm bg-red-900/20 p-2 rounded border border-red-500/20">
                     Пожалуйста, укажите valid API_KEY для использования этой функции.
                  </p>
                )}
              </div>
    
              <div className="bg-brand-gray/20 border border-white/5 backdrop-blur-sm p-8 min-h-[400px] relative overflow-hidden flex flex-col justify-center rounded-2xl shadow-2xl">
                {!result && !loading && (
                  <div className="text-center text-gray-500">
                    <Music className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p className="font-display tracking-widest">ОЖИДАНИЕ ВВОДА...</p>
                  </div>
                )}
    
                {loading && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                     <div className="text-center">
                        <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <span className="text-brand-accent font-display tracking-widest text-sm animate-pulse">AI ДУМАЕТ...</span>
                     </div>
                   </div>
                )}
    
                {result && (
                  <div className="animate-fadeIn space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-brand-accent text-xs tracking-widest uppercase">Обнаруженный Вайб</span>
                      <h3 className="text-2xl text-white font-display font-semibold uppercase drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]">{result.vibe}</h3>
                    </div>
    
                    <div className="space-y-4">
                      {result.songs.map((song, idx) => (
                        <div key={idx} className="flex gap-4 items-start group">
                          <span className="text-brand-accent font-display font-semibold text-xl opacity-70">0{idx + 1}</span>
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-brand-accent transition-colors">{song.title}</h4>
                            <p className="text-gray-400 text-sm">{song.description}</p>
                            <span className="text-xs text-brand-accent border border-brand-accent/30 px-2 py-0.5 mt-2 inline-block rounded-full bg-brand-accent/5">{song.tempo}</span>
                          </div>
                        </div>
                      ))}
                    </div>
    
                    <div className="mt-6 bg-brand-black/60 p-4 border-l-2 border-brand-accent rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm uppercase tracking-widest">
                        <Lightbulb className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" /> Свет
                      </div>
                      <p className="text-gray-300 text-sm italic">{result.lightingSuggestion}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default SetlistGenerator;