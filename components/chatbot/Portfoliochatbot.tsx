"use client";

import {
  Bot,
  ChevronDown,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./chatbot.css";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const INITIAL_SUGGESTIONS = [
  "What projects has Adarsh built?",
  "What are his technical skills?",
  "Tell me about his experience",
];

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! I'm Adarsh's portfolio assistant. Ask me anything about his projects, skills, experience, education, or certifications.",
      },
    ]);

  const [suggestions, setSuggestions] =
    useState<string[]>(INITIAL_SUGGESTIONS);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);

  // ------------------------------------------
  // Auto scroll
  // ------------------------------------------

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // ------------------------------------------
  // Focus input
  // ------------------------------------------

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // ------------------------------------------
  // Send message
  // ------------------------------------------

  async function sendMessage(
    text?: string
  ) {
    const messageText =
      (text ?? input).trim();

    if (!messageText || isLoading) {
      return;
    }

    setInput("");
    setSuggestions([]);
    setIsLoading(true);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
    };

    const assistantId =
      crypto.randomUUID();

    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      assistantMessage,
    ]);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: messageText,
            history: messages.slice(-6),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to contact chatbot"
        );
      }

      if (!response.body) {
        throw new Error(
          "Streaming is not supported"
        );
      }

      const reader =
        response.body.getReader();

      const decoder =
        new TextDecoder();

      let buffer = "";

      while (true) {
        const { value, done } =
          await reader.read();

        if (done) break;

        buffer += decoder.decode(
          value,
          { stream: true }
        );

        const lines =
          buffer.split("\n");

        buffer =
          lines.pop() ?? "";

        for (const line of lines) {
          if (!line.trim()) continue;

          const event =
            JSON.parse(line);

          // -----------------------------
          // Suggestions
          // -----------------------------

          if (
            event.type ===
            "suggestions"
          ) {
            setSuggestions(
              event.data.suggestions
            );
          }

          // -----------------------------
          // Streaming text
          // -----------------------------

          if (
            event.type === "delta"
          ) {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id ===
                assistantId
                  ? {
                      ...msg,
                      content:
                        msg.content +
                        event.data
                          .text,
                    }
                  : msg
              )
            );
          }

          // -----------------------------
          // Error
          // -----------------------------

          if (
            event.type === "error"
          ) {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id ===
                assistantId
                  ? {
                      ...msg,
                      content:
                        event.data
                          .message,
                    }
                  : msg
              )
            );
          }
        }
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Sorry, I couldn't connect to the portfolio assistant right now.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <>
      {/* ================================= */}
      {/* Floating Bot */}
      {/* ================================= */}

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="portfolio-bot-trigger"
            onClick={() =>
              setIsOpen(true)
            }
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 20,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            aria-label="Open portfolio assistant"
          >
            <motion.div
              className="portfolio-bot-glow"
              animate={{
                scale: [1, 1.18, 1],
                opacity: [
                  0.35,
                  0.7,
                  0.35,
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="portfolio-bot-icon">
              <Bot size={27} />
            </div>

            <motion.span
              className="portfolio-bot-ping"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================================= */}
      {/* Chat Window */}
      {/* ================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="portfolio-chat-window"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 25,
            }}
          >
            {/* Header */}

            <div className="portfolio-chat-header">
              <div className="portfolio-chat-identity">
                <div className="portfolio-chat-avatar">
                  <Bot size={20} />
                  <span />
                </div>

                <div>
                  <div className="portfolio-chat-title">
                    Adarsh's AI
                    <Sparkles
                      size={13}
                    />
                  </div>

                  <div className="portfolio-chat-status">
                    <span />
                    Portfolio assistant
                  </div>
                </div>
              </div>

              <button
                className="portfolio-chat-close"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}

            <div className="portfolio-chat-messages">
              {messages.map(
                (message) => (
                  <motion.div
                    key={message.id}
                    className={`portfolio-message-row ${
                      message.role ===
                      "user"
                        ? "user-row"
                        : "assistant-row"
                    }`}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    {message.role ===
                      "assistant" && (
                      <div className="portfolio-message-avatar">
                        <Bot size={14} />
                      </div>
                    )}

                    <div
                      className={`portfolio-message ${
                        message.role ===
                        "user"
                          ? "user-message"
                          : "assistant-message"
                      }`}
                    >
                      {message.content}

                      {message.role ===
                        "assistant" &&
                        isLoading &&
                        message.id ===
                          messages[
                            messages.length -
                              1
                          ]?.id && (
                          <motion.span
                            className="typing-cursor"
                            animate={{
                              opacity: [
                                1, 0,
                              ],
                            }}
                            transition={{
                              duration:
                                0.7,
                              repeat:
                                Infinity,
                            }}
                          >
                            ▋
                          </motion.span>
                        )}
                    </div>

                    {message.role ===
                      "user" && (
                      <div className="portfolio-user-avatar">
                        <User size={14} />
                      </div>
                    )}
                  </motion.div>
                )
              )}

              <div
                ref={messagesEndRef}
              />
            </div>

            {/* Suggestions */}

            <AnimatePresence>
              {suggestions.length >
                0 &&
                !isLoading && (
                  <motion.div
                    className="portfolio-suggestions"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                  >
                    <div className="suggestion-label">
                      You might also ask
                    </div>

                    <div className="suggestion-list">
                      {suggestions.map(
                        (
                          suggestion
                        ) => (
                          <button
                            key={
                              suggestion
                            }
                            onClick={() =>
                              sendMessage(
                                suggestion
                              )
                            }
                            className="suggestion-chip"
                          >
                            {suggestion}
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>

            {/* Input */}

            <form
              className="portfolio-chat-input-wrapper"
              onSubmit={
                handleSubmit
              }
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                placeholder="Ask about Adarsh..."
                disabled={isLoading}
                maxLength={1000}
              />

              <motion.button
                type="submit"
                disabled={
                  !input.trim() ||
                  isLoading
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label="Send message"
              >
                <Send size={17} />
              </motion.button>
            </form>

            <div className="portfolio-chat-footer">
              Powered by Gemini
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}