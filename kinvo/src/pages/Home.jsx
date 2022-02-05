import React from "react";

import { ContentPage } from './styles'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Dashboard from "../components/Dashboard";

function Home() {
    return(
        <div>
            <Header />
            <ContentPage>
                <Nav />
                <Dashboard />
            </ContentPage>
        </div>
    )
}

export default Home;