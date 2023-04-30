import React from 'react';
import FirstFrame from './firstframe';
import NavBar from '../ux/navbvar';
import InfoCard from "./InfoCard"
import Cards from "./cards"


export default function Home (props) {
    return (<div>
        <NavBar />
        <FirstFrame />
        <InfoCard />
        <Cards data={props.data}/>
    </div>)
}