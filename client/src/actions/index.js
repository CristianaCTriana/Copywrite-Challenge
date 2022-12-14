import axios from 'axios'

export function getResults (text) {
  return async function (dispatch) {
    try {
      const json = await axios.get('/iecho?text=' + text)
      return dispatch({
        type: 'GET_RESULTS',
        payload: json.data
      })
    } catch (error) {
      alert('Error, la palabra ingresada no puede tener simbolos, espacios, números o estar vacía.')
    }
  }
}
