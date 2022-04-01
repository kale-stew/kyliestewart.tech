import { format, parseISO } from 'date-fns'

const addCommas = (num) =>
  num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const roundDecimal = (num) => num && num.toFixed(2)

const getLocationData = (str) => {
  const [area, state] = str.toLowerCase().split(',')
  return {
    area,
    state,
  }
}

const formatDate = (date) => format(new Date(date), 'PPP')

const formatDateWithDayOfWeek = (date) =>
  typeof date === 'string'
    ? format(parseISO(date), 'PPPP')
    : format(date, 'PPPP')

// Metric to Imperial conversion
const formatStatsImperial = (distance, gain) =>
  (distance && gain && `${distance} miles & ${addCommas(gain)}'`) || null

// Imperial to Metric conversions
const milesToKilometers = (num) => roundDecimal(num * 1.609)

const feetToMeters = (num) => addCommas(roundDecimal(num / 3.281))

const formatStatsMetric = (distance, gain) =>
  (distance &&
    gain &&
    `${milesToKilometers(distance)} km & ${feetToMeters(gain)} m`) ||
  null

const sortByDateDesc = (arr) => {
  return arr.sort((a, b) => {
    if (a && a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export {
  addCommas,
  feetToMeters,
  formatDate,
  formatDateWithDayOfWeek,
  formatStatsImperial,
  formatStatsMetric,
  getLocationData,
  milesToKilometers,
  sortByDateDesc,
}
