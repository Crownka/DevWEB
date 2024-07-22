import { Outlet, Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home Professor</h1>
            <Link to="/professor/Listar">LISTAR</Link>
            <Link to="/professor/Editar">EDITAR</Link>
            <Link to="/professor/Criar">CRIAR</Link>
        </div>
    )
}

export default Home