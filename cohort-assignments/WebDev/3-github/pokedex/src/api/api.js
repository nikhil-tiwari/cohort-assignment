import axios from "axios"

export const getPOkemonData = (id=1) => {
    const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data;
}