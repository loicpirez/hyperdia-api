import axios from 'axios'
import { upperFirstLetterForEachWord } from '../utils/words'

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
    throw error
  }
}

export default requestAutoCompletion
