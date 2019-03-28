import { DateTime } from 'luxon'

const formatDatetime = (datetime: string) => {
  const date = DateTime.fromISO(datetime)
  return date.toFormat('MM/dd/yyyy hh:mma')
}

export { formatDatetime }
