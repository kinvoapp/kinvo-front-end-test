import { combineReducers } from 'redux'

import local from './local'
import nav from './nav'
import notify from './notify'

export default combineReducers({ local, nav, notify })
