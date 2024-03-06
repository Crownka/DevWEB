import ImprimeDados from "./componentes/00Atividades/02MeusDados/00MeusDados";
import Temperatura from "./componentes/00Atividades/03Temperatura/00Temperatura";

function App() {
    return (
        <div>
            <ImprimeDados
                nome="Patrick de Farias Ramos"
                mat="556711"
                curso="Ciência da Computação"
                univ="UFC - Campus Quixadá"
            />
            <hr />
            <Temperatura celsius={100} fahrenheint={86} kelvinn={400} />
        </div>
    );
}

export default App;