import { useState, useEffect } from "react";
import ProfessorTIService from "../../Service/ProfessorTIService";
import { 
    ChatContainer,
    ChatMensager,
    MensageContainer,
    Form
 } from "./Style";

function Chat({ perguntaSelecionada }) {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (perguntaSelecionada) {
            enviarPergunta(perguntaSelecionada);
        }
    }, [perguntaSelecionada]);

    const enviarPergunta = async (pergunta) => {
        const userMessage = { role: "user", content: pergunta };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);

        try {
            const answer = await ProfessorTIService.askQuestion(pergunta);
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

    const handleSendMessage = async () => {
        if (!question.trim()) return;
        
        await enviarPergunta(question);
        setQuestion("");
    };

    return (
        <ChatContainer>
            <ChatMensager>               
                <MensageContainer>
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
                </MensageContainer>

                <Form onSubmit={handleSendMessage}>
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
                        onClick={handleSendMessage}
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
                </Form>
            </ChatMensager>
        </ChatContainer>
    );
}

export default Chat;