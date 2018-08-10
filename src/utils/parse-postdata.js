import addTrailingZeroToDate from '../utils/date'
import throwError from '../utils/throw-error'

const parseSearchPostData = (data) => {
  const missingParameters = []
  if (!data.arrival) { missingParameters.push('arrival') }
  if (!data.date) { missingParameters.push('date') }
  if (!data.departure) { missingParameters.push('departure') }
  if (missingParameters.length > 0) {
    throwError('MISSING_POST_PARAMETER', {missingParameters})
  }
  const date = new Date(data.date)
  if (isNaN(date)) { throwError('INVALID_DATE', {'date': data.date}) }
  return {
    year: date.getFullYear().toString(),
    month: addTrailingZeroToDate(date.getMonth()),
    day: addTrailingZeroToDate(date.getDay()),
    hour: addTrailingZeroToDate(date.getHours()),
    minute: addTrailingZeroToDate(date.getMinutes()),
    arrival: data.arrival,
    departure: data.departure
  }
}

export { parseSearchPostData }
