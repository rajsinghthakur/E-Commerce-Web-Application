import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const Cart = sequelize.define("cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

export default Cart;