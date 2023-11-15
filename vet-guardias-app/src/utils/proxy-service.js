import axios from 'axios' 

const API_URL='http://localhost:3000/api/v1/'

export const postVeterinaria = (datosVeterinaria) => {
    axios.post(API_URL + 'veterinarias',datosVeterinaria )
        .then( alert('salio todo ok'))
}