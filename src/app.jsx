import React, { Component, Fragment } from 'react'

import Button from './components/Button/button.jsx'
import Menus from './components/Menus/menus.jsx'
import Header from './components/Header/header.jsx'
import Wallets from './components/Wallets/wallets.jsx'

export default props => (
  <>
    <Header />
    <section className="section">
      <Menus />
      <Wallets />
    </section>
  </>
)

