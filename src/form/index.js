/**
 * Created by Manpreet on 5/29/2017.
 */

import React from "react";

export class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ''
        };
    }
    handleSubmit(e){
        e.preventDefault();
        let {text} = this.state;
        let name = text.split('-')[0];
        let price = text.split('-')[1];
        let unitPrice = price;
        let {addItem} = this.props;
        addItem({name,price,qty:1,unitPrice});
        document.getElementById('itemBox').value = '';
    }
    render(){
        return(
          <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Enter item name and price separated by hyphen" id="itemBox" size="40"
                     onChange={(e)=>this.setState({text:e.target.value})}/>
          </form>
        );
    }
}
