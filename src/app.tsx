import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Routes } from './router'
import { hot } from 'react-hot-loader/root'

const AppRoot = () => <Routes />

const App = hot(AppRoot)

export { App }
