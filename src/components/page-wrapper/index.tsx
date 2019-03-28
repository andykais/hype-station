import * as React from 'react'
import './index.module.css'

const PageWrapper = ({ children }: { children: React.ReactChild }) => (
  <div styleName="page-wrapper">
    <div styleName="max-sized-container">{children}</div>
  </div>
)

export { PageWrapper }
