import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:3000/api/v1/'

export const postVeterinaria = async (datosVeterinaria) => {
    try {
        await axios.post(API_URL + 'veterinarias', datosVeterinaria)
        Swal.fire('Exito', 'Veterinaria creada satisfactoriamente', 'success')
        return true
    } catch (error) {
        Swal.fire('Error :(', 'No se pudo crear la veterinaria', 'error')        
    }
}
