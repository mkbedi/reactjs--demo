/**
 * Created by Manpreet on 5/30/2017.
 */

import React from "react";

export default class TotalBill extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td>Total Bill</td>
                <td>{this.props.totalPrice}</td>
                <td>{this.props.totalQty}</td>
                <td></td>
                <td></td>
            </tr>
        );
    }
}
