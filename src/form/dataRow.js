/**
 * Created by Manpreet on 5/29/2017.
 */

import React from "react";

export default class DataRow extends React.Component{
    constructor(props){
        super(props);
    }
    increaseQtyAndPrice(e){
        let {increaseQty,index} = this.props;
        increaseQty(index);
    }
    decreaseQtyAndPrice(e){
        let {decreaseQty,index} = this.props;
        decreaseQty(index);
    }
    render(){
        return(
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.qty}</td>
                <td onClick={this.increaseQtyAndPrice.bind(this)} className="itemQtyChange">
                    <img src="images/add.png"/>
                </td>
                <td onClick={this.decreaseQtyAndPrice.bind(this)} className="itemQtyChange">
                    <img src="images/minus.png"/>
                </td>
            </tr>
        );
    }
}
