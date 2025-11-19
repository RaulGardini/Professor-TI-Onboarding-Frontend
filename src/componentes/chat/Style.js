import styled from "styled-components";

export const ChatContainer = styled.div`
background-color: #FAF1E8;
height: 88.5vh;
width: 69%;
border-radius: 1rem;
margin: 0 0.8rem 0 1rem;
`;

export const ChatMensager = styled.div`
display: flex;
flex-direction: column;
height: 85vh;
padding: 20px;
`;

export const MensageContainer = styled.div`
flex: 1;
overflow-y: auto;
margin-bottom: 1rem;
padding: 2rem 10rem 0 10rem;
border: 1px solid #ddd;
`;

export const Form = styled.form`
display: flex;
gap: 10px;
`;