import { cartModel } from "../../models/cart.model.js";

class CartDao {
    async createCart(){
        return await cartModel.create({products: []});
    }

    async getCartByID(id){
        return await cartModel.findById(id);
    }

    async addProductToCart(cid, pid){
        return await cartModel.findOneAndUpdate({_id: cid}, {$push: {products: {id: pid}}});
    }
}

export default new CartDao();