import * as React from 'react'
import { Link } from 'react-router-dom'
import { CreatorList } from '../../components/creator-list'
import { Loader } from '../../components/loader'

export const Page = () => (
  <h1>
    <Link to="/creator">creator</Link>
    <React.Suspense fallback={<Loader />}>
      <CreatorList />
    </React.Suspense>
  </h1>
)
