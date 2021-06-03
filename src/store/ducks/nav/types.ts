/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum NavTypes {
  TOGGLE_MY_NAV = '@Navactive/TOGGLE_MY_NAV'
}

export interface NavSearch {}
/**
 * Data types
 */
export interface Nav {
  data: NavSearch
}

/**
 * State type
 */
export interface NavState {
  active: number
}
