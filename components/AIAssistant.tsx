import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "YO! I'm Deepu's AI. Want to know about his projects or skills? Just ask!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[calc(100vw-3rem)] md:w-96 h-[480px] bg-white border-4 border-black neo-shadow mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500 ease-out">
          <div className="bg-yellow-400 border-b-4 border-black p-4 flex justify-between items-center">
            <h3 className="font-black uppercase italic text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-pulse"></span>
              Deepu-Bot v1.0
            </h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-black text-white w-8 h-8 font-black flex items-center justify-center hover:bg-red-500 transition-smooth text-sm border-2 border-black"
            >
              X
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-5 bg-gray-50 bg-[radial-gradient(#00000010_1.5px,transparent_1.5px)] [background-size:24px_24px]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`
                  max-w-[90%] p-4 border-4 border-black font-bold text-sm
                  ${m.role === 'user' ? 'bg-blue-400 text-black' : 'bg-white text-black'}
                  neo-shadow
                `}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-pink-500 px-4 py-2 border-4 border-black font-black uppercase italic flex items-center gap-1 neo-shadow text-xs animate-thinking-organic">
                  THINKING...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t-4 border-black flex gap-3 bg-white">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-grow p-3 border-4 border-black font-bold focus:outline-none focus:bg-yellow-50 text-sm placeholder:text-black/30 transition-smooth"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-black text-white px-6 font-black uppercase italic hover:bg-pink-500 hover:text-white disabled:bg-gray-400 transition-smooth text-xs border-4 border-black neo-shadow-active"
            >
              SEND
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-500 w-16 h-16 rounded-full border-4 border-black neo-shadow neo-shadow-hover neo-shadow-active flex items-center justify-center text-3xl group transition-smooth"
      >
        <span className="group-hover:scale-125 transition-smooth">{isOpen ? '📉' : '👾'}</span>
      </button>
    </div>
  );
};