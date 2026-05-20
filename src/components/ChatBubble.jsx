import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setStatus('sending');

    // Replace the key below with your Web3Forms Access Key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Chat Message from Portfolio",
          message: message,
        }),
      });
      
      if (response.ok) {
        setStatus('sent');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 glass-card overflow-hidden shadow-2xl origin-bottom-right"
          >
            <div className="bg-dark-100 p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h4 className="font-medium text-white">Let's Chat</h4>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>
            
            <div className="p-4 h-64 bg-dark-200/50 flex flex-col">
              <div className="mt-auto space-y-4">
                <div className="bg-dark-100 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-300 w-[85%]">
                  Hi there! 👋 I'm Nithanth. How can I help you today?
                </div>
                {status === 'sent' && (
                  <div className="bg-accent/20 border border-accent/30 p-3 rounded-2xl rounded-tr-sm text-sm text-white self-end text-right w-[85%]">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/30 p-3 rounded-2xl rounded-tr-sm text-sm text-white self-end text-right w-[85%]">
                    Failed to send message. Please try again.
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-white/5 bg-dark-100">
              <div className="relative">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..." 
                  disabled={status === 'sending'}
                  className="w-full bg-dark-200 border border-white/10 rounded-full pl-4 pr-12 py-2.5 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={status === 'sending' || !message.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  <FiSend size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,71,87,0.4)] hover:shadow-[0_0_30px_rgba(255,71,87,0.6)] transition-shadow duration-300 relative"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatBubble;
