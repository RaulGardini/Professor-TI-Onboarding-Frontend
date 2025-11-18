import { useState } from "react";
import ProfessorTIService from "../../Service/ProfessorTIService";
import { ChatContainer } from "./Style";

function Chat() {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        
        if (!question.trim()) return;

        // Adiciona a pergunta do usuário
        const userMessage = { role: "user", content: question };
        setMessages(prev => [...prev, userMessage]);
        setQuestion("");
        setLoading(true);

        try {
            // Chama a API
            const answer = await ProfessorTIService.askQuestion(question);
            
            // Adiciona a resposta do professor
            const botMessage = { role: "assistant", content: answer };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = { 
                role: "assistant", 
                content: "Desculpe, ocorreu um erro ao processar sua pergunta." 
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ChatContainer>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                height: "85vh",
                padding: "20px"
            }}>               
                {/* Área de mensagens */}
                <div style={{
                    flex: 1,
                    overflowY: "auto",
                    marginBottom: "1rem",
                    padding: " 2rem 10rem 0 10rem",
                    border: "1px solid #ddd",
                }}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                                marginBottom: "15px"
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: msg.role === "user" ? "40%" : "100%",
                                    padding: "0.8rem",
                                    borderRadius: "1.5rem",
                                    color: msg.role === "user" ? "#f0f0f0" : "#333",
                                    backgroundColor: msg.role === "user" ? "#5275a3ff" : "#bbbbbb6e",
                                }}
                            >
                                <p style={{ margin: "5px 0 0 0" }}>{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div style={{ textAlign: "center", color: "#666" }}>
                            Pensando...
                        </div>
                    )}
                </div>

                {/* Formulário de envio */}
                <form onSubmit={handleSendMessage} style={{ display: "flex", gap: "10px" }}>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Faça sua pergunta sobre TI..."
                        disabled={loading}
                        style={{
                            flex: 1,
                            padding: "10px",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            border: "1px solid #ddd"
                        }}
                    />
                    <button
                        type="submit"
                        disabled={loading || !question.trim()}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "4px",
                            border: "none",
                            backgroundColor: "#5275a3ff",
                            color: "white",
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading || !question.trim() ? 0.6 : 1
                        }}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </ChatContainer>
    );
}

export default Chat;