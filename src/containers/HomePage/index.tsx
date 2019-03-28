import * as React from 'react'
import { Link } from 'react-router-dom'
import { CreatorList } from '../../components/creator-list'
import { Loader } from '../../components/loader'
import { PageWrapper } from '../../components/page-wrapper'
import './index.module.css'

export const Page = () => (
  <div>
    <Link to="/creator">creator</Link>
    <PageWrapper>
      <React.Suspense fallback={<Loader />}>
        <CreatorList />
      </React.Suspense>
    </PageWrapper>
  </div>
)
