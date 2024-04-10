import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, incrementarPorQtd, decrementarPorQtd } from "./Slice/counterSlice"

const ContadorRedux = () => {

    const counter = useSelector( (state) => {
        return state.counter.value
    })

    const dispatch = useDispatch()

    return (
        <>
            <h1>Contador: {counter} </h1>
            <button
                onClick={ () => dispatch(incrementar()) }
            >
                Incrementar
            </button>
            <button
                onClick={ () => dispatch(decrementar()) }
            >
                Decrementar
            </button>
            <button
                onClick={ () => dispatch(incrementarPorQtd(10)) }
            >
                Incrementar + 10
            </button>
            <button
                onClick={ () => dispatch(decrementarPorQtd(10)) }
            >
                Decrementar - 10
            </button>

        </>
    )
}

export default ContadorRedux