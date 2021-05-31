import React from 'react'
import { HomePage } from './pages'

interface RouteDataItem {
  path?: string
  name?: string
  isProtected?: boolean
  component?: React.FC
}

export const routes: RouteDataItem[] = [
  {
    path: '/',
    name: 'login',
    isProtected: false,
    component: HomePage
  }
]
