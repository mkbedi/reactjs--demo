/**
 * Created by Manpreet on 5/29/2017.
 */

import React from "react";
import {InputBox} from "./form/index";
import DataRow from "./form/dataRow";
import TotalBill from "./form/totalBill";

export default class App extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemList:[],
            totalPrice : 0,
            totalQty : 0
        };
    }
    add(item){
        let finalItemList = [...this.state.itemList,item];
        this.billing(finalItemList);
    }
    increaseQtyAndPrice(index){
        this.state.itemList[index].qty += 1;
        this.state.itemList[index].price = this.state.itemList[index].unitPrice * this.state.itemList[index].qty;

        this.billing(this.state.itemList);
    }
    decreaseQtyAndPrice(index){
        if(this.state.itemList[index].qty===1){
            this.state.itemList.splice(index, 1);
        }else{
            this.state.itemList[index].qty -= 1;
            this.state.itemList[index].price = this.state.itemList[index].unitPrice * this.state.itemList[index].qty;
        }

        this.billing(this.state.itemList);
    }
    billing(itemList){
        let totalPrice = 0;
        itemList.map((item,index)=>totalPrice += parseFloat(item.price));

        let totalQty = 0;
        itemList.map((item,index)=>totalQty += parseFloat(item.qty));

        this.setState({
            itemList : itemList,
            totalPrice : totalPrice,
            totalQty : totalQty
        });
    }
    render(){
        return(
            <div>
                <h1>{this.props.greeting}</h1>
                <InputBox addItem ={this.add.bind(this)}/>
                <hr/>
                    {
                        this.state.itemList.length!=0? <table>
                            <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Quantity</th>
                                <th>Increase Quantity</th>
                                <th>Decrease Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.itemList.map((item,index)=>
                                    <DataRow item={item} key={index} index={index}
                                             increaseQty={this.increaseQtyAndPrice.bind(this)} decreaseQty={this.decreaseQtyAndPrice.bind(this)} />)
                            }
                            <TotalBill totalPrice={this.state.totalPrice} totalQty={this.state.totalQty}/>

                            </tbody>
                        </table> : <div></div>
                    }

            </div>
        );
    }
}

