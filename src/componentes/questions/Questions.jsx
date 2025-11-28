import {
    QuestionsContainer,
    SubTitleContainer,
    HorizontalLine,
    Li,
    QuestionText,
    ButtonPerguntar,
    PerguntasFrequentes,
    ListaPerguntas
} from "./Style";

function Questions({ onPerguntaSelecionada }) {
    const perguntas = [
        { id: 1, titulo: "VPN:", pergunta: "Como ativar a VPN" },
        { id: 2, titulo: "Time:", pergunta: "Qual é o time da TI" },
        { id: 3, titulo: "E-mail Institucional:", pergunta: "Como acessar meu e-mail institucional?" },
        { id: 4, titulo: "Senha:", pergunta: "Como redefinir minha senha da rede ou e-mail?" },
        { id: 5, titulo: "VPN:", pergunta: "Como configurar a VPN fora do campus?" },
        { id: 6, titulo: "Chamados TI:", pergunta: "Como abrir um chamado para suporte técnico?" },
        { id: 7, titulo: "Wi-Fi:", pergunta: "Como conectar à rede Wi-Fi da instituição?" },
        { id: 8, titulo: "Equipamentos:", pergunta: "Como solicitar equipamentos (notebook, projetor, etc.)?" },
        { id: 9, titulo: "TI:", pergunta: "Como entrar em contato com o time de TI?" },
        { id: 10, titulo: "Coordenação:", pergunta: "Quem é o responsável pela minha coordenação de curso?" },
        { id: 11, titulo: "RH:", pergunta: "Quais são os contatos do RH?" },
        { id: 12, titulo: "Manual:", pergunta: "Onde encontro o manual do professor?" },
        { id: 13, titulo: "Capacitação:", pergunta: "Existem treinamentos disponíveis para os sistemas da instituição?" },
        { id: 14, titulo: "Templates:", pergunta: "Onde encontro templates (PPT, documentos, logotipos)?" },
    ];

    const handlePerguntar = (pergunta) => {
        onPerguntaSelecionada(pergunta);
    };

    const cores = ['#f0ddd2ff', '#EDD4C6', '#EFCCB9', '#F1BD9F', '#F2BC9E', '#F4B089', '#F6A97D', '#F7A170', '#F79C68', '#F89F66', '#FAA467', '#FAA967'];
    
    return (
        <>
            <QuestionsContainer>
                <SubTitleContainer>
                    <h1>
                        {'Professor TI'.split('').map((letra, index) => (
                            <span key={index} style={{
                                color: cores[index % cores.length]
                            }}>
                                {letra}
                            </span>
                        ))}
                    </h1>
                    <p>
                        {'Onboarding'.split('').map((letra, index) => (
                            <span key={index} style={{
                                color: cores[index % cores.length]
                            }}> {letra}</span>
                        ))}
                    </p>
                </SubTitleContainer>
                <HorizontalLine />
                <PerguntasFrequentes>perguntas frequentes:</PerguntasFrequentes>
                <ListaPerguntas >
                    {perguntas.map((pergunta) => (
                        <Li key={pergunta.id}>
                            <QuestionText>
                                <h4>{pergunta.titulo} </h4>
                                <p>{pergunta.pergunta}</p>
                            </QuestionText>
                            <div>
                                <ButtonPerguntar onClick={() => handlePerguntar(pergunta.pergunta)}>
                                    Perguntar
                                </ButtonPerguntar>
                            </div>
                        </Li>
                    ))}
                </ListaPerguntas>
            </QuestionsContainer>
        </>
    );
}

export default Questions;