import { upperFirstLetterForEachWord } from '../utils/words'
import axios from 'axios'
import throwError from '../utils/throw-error'

const parseAutoCompletionResponse = (data) => {
  return data.split(',').filter(v => v).map(match => {
    return upperFirstLetterForEachWord(match)
  })
}

async function requestAutoCompletion (query) {
  try {
    const response = await axios.get(`http://www.hyperdia.com/en/cgi/suggest/en/nsnl.cgi?${query.toUpperCase()}_null`)
    return parseAutoCompletionResponse(response.data)
  } catch (error) {
    throwError('REQUEST_AUTOCOMPLETION', {'message': error.message})
  }
}

export default requestAutoCompletion
