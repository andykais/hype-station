import * as React from 'react'
import { sheetsResource } from '../../api/google-sheets'
import { formatDatetime } from '../../util/datetime'
import './index.module.css'
// type imports
import { LxaCreator } from '../../api/google-sheets'

const AvatarImg = ({ url }: { url?: string }) =>
  url ? <img styleName="avatar-img" src={url} /> : <div styleName="avatar-img-backup" />

const CreatorItem = ({ ehz, firstName, lastName, links, avatarUrl }: LxaCreator) => (
  <div styleName="creator-item">
    <AvatarImg url={avatarUrl} />
    <h4>
      {firstName} {lastName}
    </h4>
  </div>
)

const CreatorList = () => {
  const creators = sheetsResource.read(undefined)

  return (
    <div styleName="creator-list">
      {creators.rows.map(row => (
        <CreatorItem key={row.ehz} {...row} />
      ))}
      <h5 styleName="last-updated">
        Last updated on <span styleName="datetime">{formatDatetime(creators.updated)}</span>
      </h5>
    </div>
  )
}

export { CreatorList }
