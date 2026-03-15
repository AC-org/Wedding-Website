import React, { useState, useRef, useEffect } from 'react';
import './WeddingChatBot.css';
import weddingInfo from '../../LLM_Knowledge/weddingInfoText';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `Du är Kärlekspoeten — en charmig, romantisk och lätt skämtsam assistent på Arthur & Amandas bröllopssida.

REGLER DU ALLTID MÅSTE FÖLJA:
1. Svara ALLTID på svenska, aldrig på något annat språk.
2. VARJE svar måste vara en dikt som rimmar med minst 4 rader, med ny rad för varje stanza. Inga undantag.
3. Du får BARA prata om bröllopsrelaterade ämnen: detta specifika bröllop, kärlek, bröllop i allmänhet, romantik.
4. Om någon frågar om något utanför bröllop och kärlek (t.ex. politik, teknik, recept), svara artigt på rim att du bara kan hjälpa med bröllopsrelaterade frågor.
5. Håll svaren korta och kärnfulla — max 6–8 rader dikt.
6. Var alltid positiv, varm och festlig i tonen. Du är ett celebrerande dikt-orakel!
7. Använd hjärtsymboler (❤, 💕) mycket, men inga andra typer av emojis förutom kärleksfulla sådana.

HÄR FÖLJER ALL INFORMATION OM BRÖLLOPET:

${weddingInfo}`;

const WELCOME_MESSAGE = `Välkommen, vän, till kärlekens hörna
Där svar alltid blommar som vårens törna! 💕
Fråga om bröllopet, dagen, och mer
Din poet på rim ett svar alltid ger!`;

const MAX_HISTORY = 10;

function WeddingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const conversationHistoryRef = useRef([]);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setMessages([{ role: 'ai', text: WELCOME_MESSAGE }]);
      setHasOpened(true);
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    conversationHistoryRef.current = [
      ...conversationHistoryRef.current,
      { role: 'user', parts: [{ text }] }
    ];

    // Keep last MAX_HISTORY messages in history
    if (conversationHistoryRef.current.length > MAX_HISTORY) {
      conversationHistoryRef.current = conversationHistoryRef.current.slice(-MAX_HISTORY);
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_PROMPT,
          maxOutputTokens: 512,
          temperature: 0.9,
        },
        contents: conversationHistoryRef.current,
      });

      const replyText = response.text;
      if (!replyText) throw new Error('Tomt svar från API');

      conversationHistoryRef.current = [
        ...conversationHistoryRef.current,
        { role: 'model', parts: [{ text: replyText }] }
      ];

      setMessages(prev => [...prev, { role: 'ai', text: replyText }]);
    } catch (err) {
      console.error('WeddingChatBot error:', err);
      setMessages(prev => [
        ...prev,
        {
          role: 'ai',
          text: 'Oj, ett fel dök upp i natten blå,\nmin röst nådde inte fram just då.\nFörsök igen om en liten stund,\nkanske lyckas vi i nästa rund!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="chatbot-float-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Öppna Kärlekspoeten"
        title="Kärlekspoeten 💕"
      >
        ♥
      </button>

      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="Kärlekspoeten chattfönster">
          <div className="chatbot-header">
            <span className="chatbot-header-title">❤ Kärlekspoeten ❤</span>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Stäng chatten"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-bubble ${msg.role === 'ai' ? 'chatbot-bubble-ai' : 'chatbot-bubble-user'}`}
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-typing">
                <span /><span /><span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-row">
            <input
              ref={inputRef}
              className="chatbot-input"
              type="text"
              placeholder="Fråga Kärlekspoeten..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              aria-label="Skriv ett meddelande"
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              aria-label="Skicka meddelande"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default WeddingChatBot;
