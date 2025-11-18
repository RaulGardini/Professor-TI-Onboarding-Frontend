import styled from "styled-components";

export const SubTitleContainer = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
flex-direction: column;
justify-content: center;
margin-top: 1rem;
color: #FFDAB4;
`;

export const QuestionsContainer = styled.div`
background-color: #3E5B7D;
width: 30%;
height: 88.5vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 0 0 0.8rem;
border-radius: 1rem;
`;

export const HorizontalLine = styled.div`
margin-top: 2rem;
width: 80%;
height: 1px;
background-color: #e4e4e4ff;
`;

export const Li = styled.li`
width: 75%;
background-color: #102432;
margin-top: 2rem;
padding: 1rem;
display: flex;
font-size: 0.9rem;
justify-content: space-between;
border-radius: 0.8rem;
color: #f0f0f0ff;
`;

export const QuestionText = styled.div`

`;

export const ButtonPerguntar = styled.button`
padding: 0.5rem 1rem;
background-color: #3E5A7E;
color: #f0f0f0ff;
font-size: 1rem;
border: none;
height: 100%;
border-radius: 2rem;

&:hover {
    cursor: pointer;
    background-color: #5275a3ff;
    transition: 0.2s;
}
`;

export const PerguntasFrequentes = styled.p`
margin-top: 2rem;
font-size: 1.5rem;
color: #e4e4e4ff;
`;

export const ListaPerguntas = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 71vh;
    padding: 0;
    
    /* Estiliza a barra de rolagem (opcional) */
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: #6992afff;
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #516f97ff;
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: #5275a3ff;
    }
`;