const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const cartSchema=new Schema(
    {
        itemName:{
            type:String,
        },
        itemPrice:{
            type:double,
        }
    }
)

const Cart=mongoose.model('Cart',cartSchema);

module.exports=Cart;