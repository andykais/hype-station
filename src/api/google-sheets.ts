import fetch from 'node-fetch'
import { unstable_createResource as createResource } from 'react-cache'

const viewType = 'list'
const tabNumber = 1
const sheetId = '1_jNmLTgp4ttsUs5PCTi3k2GQezJwaj0g0iyQZIvVpDc'

type SpreadsheetCell = { $t: string }
type SpreadsheetRow = {
  gsx$avatarurl: SpreadsheetCell
  gsx$ehz: SpreadsheetCell
  gsx$firstname: SpreadsheetCell
  gsx$lastname: SpreadsheetCell
  gsx$links: SpreadsheetCell
  updated: SpreadsheetCell
}
type LxaSpreadsheet = {
  feed: {
    updated: SpreadsheetCell
    entry: SpreadsheetRow[]
  }
}

export type LxaCreator = {
  avatarUrl?: string
  ehz: string
  firstName: string
  lastName: string
  links: string[]
  updated: string
}
type LxaCreatorsData = {
  updated: string
  rows: LxaCreator[]
}
const getSheet = async (): Promise<LxaCreatorsData> => {
  const url = `https://spreadsheets.google.com/feeds/${viewType}/${sheetId}/${tabNumber}/public/values?alt=json`
  const response = await fetch(url)
  const { feed }: LxaSpreadsheet = await response.json()
  const rows = feed.entry.map(row => ({
    avatarUrl: row['gsx$avatarurl']['$t'],
    ehz: row['gsx$ehz']['$t'],
    firstName: row['gsx$firstname']['$t'],
    lastName: row['gsx$lastname']['$t'],
    links: row['gsx$links']['$t'].split(/\s/),
    updated: row.updated['$t']
  }))

  return { updated: feed.updated['$t'], rows }
}

export const sheetsResource = createResource(getSheet)
