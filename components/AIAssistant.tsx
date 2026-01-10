
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
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 h-[420px] bg-white border-4 border-black neo-shadow mb-3 flex flex-col overflow-hidden">
          <div className="bg-yellow-400 border-b-4 border-black p-3 flex justify-between items-center">
            <h3 className="font-black uppercase italic text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-pulse"></span>
              Deepu-Bot v1.0
            </h3>
            <button onClick={() => setIsOpen(false)} className="bg-black text-white w-8 h-8 font-black flex items-center justify-center hover:bg-red-500 transition-colors text-sm border-2 border-black">X</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:16px_16px]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[90%] p-3 border-4 border-black font-bold text-sm
                  ${m.role === 'user' ? 'bg-blue-400 text-black' : 'bg-white text-black'}
                  neo-shadow
                `}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-pink-500 p-3 border-4 border-black font-black uppercase italic flex items-center gap-3 neo-shadow text-xs animate-pulse-grow">
                  <span className="flex items-center">
                    Thinking
                    <span className="animate-dot-pulse ml-1" style={{ animationDelay: '0s' }}>.</span>
                    <span className="animate-dot-pulse mx-0.5" style={{ animationDelay: '0.2s' }}>.</span>
                    <span className="animate-dot-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t-4 border-black flex gap-2 bg-white">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-grow p-2 border-4 border-black font-bold focus:outline-none focus:bg-yellow-50 text-sm placeholder:text-black/40"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-black text-white px-4 font-black uppercase italic hover:bg-gray-800 disabled:bg-gray-400 transition-colors text-xs border-2 border-black neo-shadow-active"
            >
              SEND
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-500 w-16 h-16 rounded-full border-4 border-black neo-shadow neo-shadow-hover neo-shadow-active flex items-center justify-center text-3xl group transition-all"
      >
        <span className="group-hover:scale-110 transition-transform">👾</span>
      </button>
    </div>
  );
};
