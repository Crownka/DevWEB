import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import Criar from "./professor/Criar";
import Editar from "./professor/Editar";
import Listar from "./professor/Listar";
import CriarAluno from "./aluno/CriarAluno";
import ListarAluno from "./aluno/ListarAluno";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "professor/listar",
                    element: <Listar />
                },
                {
                    path: "professor/criar",
                    element: <Criar />
                },
                {
                    path: "professor/editar",
                    element: <Editar />
                },
                {
                    path: "aluno/listar",
                    element: <ListarAluno />
                },
                {
                    path: "aluno/criar",
                    element: <CriarAluno />
                },
            ]
        },
    ]
)

const Main = ( ) => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main