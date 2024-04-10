import ContadorRedux from "./ContadorRedux"
import store from "./Store/Store"
import { Provider } from "react-redux"

const PrincipalRedux = () => {
    return (
        <>
            <Provider store={store}>
                <ContadorRedux />
            </Provider>
        </>
    )
}

export default PrincipalRedux