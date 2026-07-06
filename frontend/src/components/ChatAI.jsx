import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ChatAI.css';

const FAQ_ANSWERS = {
  payroll: {
    question: "Tell me about Eazzio Payroll",
    answer: "Eazzio Payroll is a comprehensive Field Force Management and Payroll generation system. It helps you track field employees in real-time, monitor live location workflows, capture attendance, assign tasks, and automate complex salary calculations with detailed payroll reports."
  },
  books: {
    question: "What is Eazzio Books?",
    answer: "Eazzio Books is an intuitive, all-in-one business accounting software. It allows you to generate GST-ready invoices and quotes, manage customer and vendor accounts, track business expenses, and monitor cash flows with simple compliance reports."
  },
  telecaller: {
    question: "What is Eazzio Telecaller?",
    answer: "Eazzio Telecaller (Dialer Outreach) is an outbound calling and lead management tool. It streamlines sales development and support workflows, tracks customer call follow-ups, records notes, and monitors telecaller team performance metrics."
  },
  reminders: {
    question: "What is Eazzio Reminders?",
    answer: "Eazzio Reminders is a smart follow-up and deadline tracking tool. It alerts teams of pending tasks, schedules automated client reminders, tracks deadlines, and boosts operational accountability across your organization."
  },
  demo: {
    question: "How do I request a product demo?",
    answer: "We would love to show you a demo! You can request a personalized demo by going to our Contact page, or clicking 'Request a Demo' right here. Let us know which products you're interested in!"
  }
};

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! I am Eazzio AI, your business automation assistant. How can I help you optimize your business operations today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let botResponseText = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes('payroll') || lowerText.includes('field') || lowerText.includes('location')) {
        botResponseText = FAQ_ANSWERS.payroll.answer;
      } else if (lowerText.includes('books') || lowerText.includes('invoice') || lowerText.includes('gst') || lowerText.includes('accounting')) {
        botResponseText = FAQ_ANSWERS.books.answer;
      } else if (lowerText.includes('telecaller') || lowerText.includes('dialer') || lowerText.includes('call') || lowerText.includes('outreach')) {
        botResponseText = FAQ_ANSWERS.telecaller.answer;
      } else if (lowerText.includes('reminder') || lowerText.includes('task') || lowerText.includes('alert')) {
        botResponseText = FAQ_ANSWERS.reminders.answer;
      } else if (lowerText.includes('demo') || lowerText.includes('contact') || lowerText.includes('book') || lowerText.includes('trial')) {
        botResponseText = FAQ_ANSWERS.demo.answer + " Click here to visit our [Contact Page](/contact).";
      } else if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
        botResponseText = "Hello! Nice to meet you. How can I help you explore Eazzio's products (Books, Payroll, Reminders, Telecaller) today?";
      } else {
        botResponseText = "I see. Eazzio offers a suite of business tools including Eazzio Books (Accounting), Eazzio Payroll (Field Force & Attendance), Eazzio Telecaller (Lead dialing), and Eazzio Reminders. Let me know which area you'd like to automate!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponseText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (key) => {
    const qText = FAQ_ANSWERS[key].question;
    handleSendMessage(qText);
  };

  const parseMessageText = (text) => {
    // Basic markdown link parsing for Contact Page navigation
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const linkPath = match[2];
      parts.push(
        <span
          key={match.index}
          className="chat-link"
          onClick={() => {
            navigate(linkPath);
            setIsOpen(false);
          }}
        >
          {linkText}
        </span>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="chat-ai-container">
      {/* Floating Action Button */}
      <button 
        className={`chat-ai-fab ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat Assistant"
        id="chat-ai-toggle-btn"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="chat-badge-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-ai-window">
          {/* Header */}
          <div className="chat-ai-header">
            <div className="chat-ai-header-profile">
              <div className="chat-ai-avatar">
                <Bot size={20} />
                <span className="chat-avatar-status"></span>
              </div>
              <div>
                <h4>Eazzio Support AI</h4>
                <p>Online • Instant Assist</p>
              </div>
            </div>
            <button className="chat-ai-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chat-ai-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-ai-message-row ${msg.sender}`}>
                <div className="chat-message-bubble">
                  <p>{parseMessageText(msg.text)}</p>
                  <span className="chat-message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-ai-message-row bot">
                <div className="chat-message-bubble typing-bubble">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Options */}
          {messages.length === 1 && !isTyping && (
            <div className="chat-ai-faqs">
              <p className="faq-title">Frequently Asked Questions</p>
              <div className="faq-grid">
                <button onClick={() => handleQuickQuestion('books')}>GST Billing & Books</button>
                <button onClick={() => handleQuickQuestion('payroll')}>Field Force Tracker</button>
                <button onClick={() => handleQuickQuestion('telecaller')}>Dialer Outreach</button>
                <button onClick={() => handleQuickQuestion('demo')}>Request a Demo</button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <form 
            className="chat-ai-input-form" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
          >
            <input
              type="text"
              placeholder="Ask Eazzio AI a question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" disabled={!inputText.trim()} aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAI;
