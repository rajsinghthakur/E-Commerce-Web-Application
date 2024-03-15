import sequelize from "../db/dbconfig.js";

const CartItems = sequelize.define("cartItem",{});

export default CartItems;