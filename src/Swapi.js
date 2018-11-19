
import React, { Component } from "react";
import facade from "./apiFacade";


export default class Swapi extends Component {
    constructor(props) {
        super(props);
        this.state = {swapiData: facade.fetchSwapi()}
    }
    render() {
        console.log(this.state.swapiData);
        return (
            <div>
                
            </div>
        ); //{this.state.swapiData.getElement[0]}
    }
}