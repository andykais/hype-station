import * as React from 'react'
import { sheetsResource } from '../../api/google-sheets'

const sheetId = '1_jNmLTgp4ttsUs5PCTi3k2GQezJwaj0g0iyQZIvVpDc'

const CreatorList = () => {
  const creators = sheetsResource.read(sheetId)

  return <div>{JSON.stringify(creators)}</div>
}

export { CreatorList }
