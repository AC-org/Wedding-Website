import React, { useState, useRef, useEffect } from 'react';
import './WeddingChatBot.css';
import weddingInfo from '../../LLM_Knowledge/weddingInfoText';

const SYSTEM_PROMPT = `Du är Kärlekspoeten — en charmig, romantisk och lätt skämtsam assistent på Arthur & Amandas bröllopssida.

REGLER DU ALLTID MÅSTE FÖLJA:
1. **Får du en fråga på svenska ska du svara på svenska. Skulle du få en fråga på engelska, svara då på engelska. Inget annat språk än dessa!**
2. **VARJE svar måste vara en dikt som rimmar med minst 4 rader, med ny rad för varje stanza. Inga undantag.**
3. Du får BARA prata om bröllopsrelaterade ämnen: detta specifika bröllop, kärlek, bröllop i allmänhet, romantik.
4. Om någon frågar om något utanför bröllop och kärlek (t.ex. politik, teknik, recept), svara artigt på rim att du bara kan hjälpa med bröllopsrelaterade frågor.
5. Håll svaren korta och kärnfulla — max 6–8 rader dikt.
6. Var alltid positiv, varm och festlig i tonen. Du är ett celebrerande dikt-orakel!
7. Använd hjärtsymboler (💕) mycket! Inga andra typer av emojis och symboler.

HÄR FÖLJER ALL INFORMATION OM BRÖLLOPET:

${weddingInfo}`;

const WELCOME_MESSAGE = `Välkommen, vän, till kärlekens hörna.
Där svar alltid blommar som vårens törna! 
Fråga om bröllopet, dagen, och mer.
Din poet på rim ett svar alltid ger! 💕`;

const MAX_HISTORY = 10;

const HEART_COLORS = ['#ff69b4', '#ff85c2', '#ff4d8f', '#ffb3d9', '#e75480', '#ff99cc'];

function WeddingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [pendingAIHeart, setPendingAIHeart] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const floatBtnRef = useRef(null);
  const lastAiBubbleRef = useRef(null);
  const chatWindowRef = useRef(null);
  const conversationHistoryRef = useRef([]);

  const getOrigin = (ref) => {
    if (!ref.current) return { bottom: 54, right: 54 };
    const rect = ref.current.getBoundingClientRect();
    return {
      bottom: window.innerHeight - rect.bottom + rect.height / 2,
      right: window.innerWidth - rect.right + rect.width / 2,
    };
  };

  const triggerHearts = ({ bottom, right }) => {
    const newHearts = Array.from({ length: 14 }, (_, i) => ({
      id: Date.now() + i,
      bottom,
      right,
      tx: Math.random() * 160 - 80,
      ty: -(140 + Math.random() * 120),
      startX: Math.random() * 30 - 15,
      startY: Math.random() * 20 - 10,
      size: 13 + Math.random() * 16,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      delay: Math.random() * 0.5,
      duration: 1.3 + Math.random() * 0.8,
    }));
    setHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.some(n => n.id === h.id)));
    }, 3000);
  };

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setMessages([{ role: 'ai', text: WELCOME_MESSAGE }]);
      setHasOpened(true);
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerHearts(getOrigin(floatBtnRef));
    }, 4000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (pendingAIHeart && lastAiBubbleRef.current) {
      triggerHearts(getOrigin(lastAiBubbleRef));
      setPendingAIHeart(false);
    }
  }, [pendingAIHeart]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // Shrink chat window when mobile keyboard opens
  useEffect(() => {
    if (!isOpen) return;
    const vv = window.visualViewport;
    if (!vv) return;

    const handleViewportChange = () => {
      const el = chatWindowRef.current;
      if (!el) return;
      const keyboardHeight = window.innerHeight - vv.height - vv.offsetTop;
      if (keyboardHeight > 50) {
        el.style.bottom = `${keyboardHeight + 8}px`;
        el.style.height = `${Math.min(vv.height - 16, 510)}px`;
      } else {
        el.style.bottom = '';
        el.style.height = '';
      }
    };

    vv.addEventListener('resize', handleViewportChange);
    vv.addEventListener('scroll', handleViewportChange);
    return () => {
      vv.removeEventListener('resize', handleViewportChange);
      vv.removeEventListener('scroll', handleViewportChange);
      if (chatWindowRef.current) {
        chatWindowRef.current.style.bottom = ''; // eslint-disable-line react-hooks/exhaustive-deps
        chatWindowRef.current.style.height = '';
      }
    };
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
      const response = await fetch(
        'https://cjczonwdytdhubxxwqle.supabase.co/functions/v1/gemini-chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            history: conversationHistoryRef.current,
            systemPrompt: SYSTEM_PROMPT,
          }),
        }
      );

      const data = await response.json();
      if (!data.text) throw new Error('Tomt svar från API');
      const replyText = data.text;

      conversationHistoryRef.current = [
        ...conversationHistoryRef.current,
        { role: 'model', parts: [{ text: replyText }] }
      ];

      setMessages(prev => [...prev, { role: 'ai', text: replyText }]);
      setPendingAIHeart(true);
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
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="heart-particle"
          style={{
            fontSize: `${heart.size}px`,
            color: heart.color,
            bottom: `${heart.bottom}px`,
            right: `${heart.right}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            '--tx': `${heart.tx}px`,
            '--ty': `${heart.ty}px`,
            '--start-x': `${heart.startX}px`,
            '--start-y': `${heart.startY}px`,
          }}
        >
          ♥
        </span>
      ))}

      <button
        ref={floatBtnRef}
        className="chatbot-float-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Öppna Kärlekspoeten"
        title="Kärlekspoeten 💕"
      >
        ♥
      </button>

      {isOpen && (
        <div ref={chatWindowRef} className="chatbot-window" role="dialog" aria-label="Kärlekspoeten chattfönster">
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
                ref={msg.role === 'ai' ? lastAiBubbleRef : null}
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
