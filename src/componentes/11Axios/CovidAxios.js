import { useEffect } from "react";
import axios from "axios";

const CovidAxios = () => {

    useEffect(() => {
        axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
        .then(resposta +> console.log(resposta.data[8].ca))
        .catch(error => console.log(error))
    }, [])
}

export default CovidAxios;