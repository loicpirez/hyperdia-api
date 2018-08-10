import axios from 'axios'
import throwError from '../utils/throw-error'

async function requestSearchResult (data) {
  try {
    const response = await axios.post(
      'http://www.hyperdia.com/en/cgi/search/en/hyperdia2.cgi',
      'dep_node=TOKYO&arv_node=AKIHABARA&via_node01=&via_node02=&via_node03=&year=2018&month=08&day=15&hour=19&minute=51&search_type=0&search_way=&transtime=undefined&sort=0&max_route=5&faretype=0&ship=off&lmlimit=null&search_target=route&facility=reserved&sum_target=7&_=',
      {headers: {'Referer': 'http://www.hyperdia.com/en/cgi/en/search.html?dep_node=TOKYO&arv_node=AKIHABARA&via_node01=&via_node02=&via_node03=&year=2018&month=08&day=15&hour=19&minute=51&search_type=0&search_way=&transtime=undefined&sort=0&max_route=5&faretype=0&ship=off&lmlimit=null&search_target=route&facility=reserved&sum_target=7'}}
    )
    return response.data
  } catch (error) {
    // Error 105: premiere ville invalide
    // Error 106: deuxieme ville invalide
    throwError('REQUEST_SEARCH', {'message': error.message})
  }
}

export default requestSearchResult
