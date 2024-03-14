const ComFilho = ({ mensagem, enviarMensagemParaOPai }) => {

    //let mensagem = props

    return (
        <>
            <h2>Mensagem do Pai: {mensagem}</h2>
            <button
                onClick={() => enviarMensagemParaOPai("Oi pai, tudo bem?")}
            >
                Enviar mensagem para o Pai!
            </button>
        </>
    );
}

export default ComFilho;