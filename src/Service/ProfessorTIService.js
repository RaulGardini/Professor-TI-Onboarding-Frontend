// Service para comunicação com a API do Professor TI Onboarding

const API_BASE_URL = 'https://localhost:7189'; // URL da sua API

const ProfessorTIService = {
    async askQuestion(question) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question })
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar pergunta');
            }

            const data = await response.json();
            return data.answer;
        } catch (error) {
            console.error('Erro no ProfessorTIService:', error);
            throw error;
        }
    }
};

export default ProfessorTIService;