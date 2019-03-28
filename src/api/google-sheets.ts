import fetch from 'node-fetch'
import { unstable_createResource as createResource } from 'react-cache'

const viewType = 'list'
const tabNumber = 1

const getSheet = async (sheetId: string) => {
  const url = `https://spreadsheets.google.com/feeds/${viewType}/${sheetId}/${tabNumber}/public/values?alt=json`
  const response = await fetch(url)
  return response.json()
}

export const sheetsResource = createResource(getSheet)
