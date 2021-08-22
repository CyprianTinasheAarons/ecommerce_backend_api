import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Cart } from "../../models/cart/cart"
import { CreateCartInput } from "../../inputs/cart/create"
import { UpdateCartInput } from "../../inputs/cart/update"

@Resolver()
export class CartResolver {

    //Get a cart by id
    @Query(() => Cart)
    async getCart(@Arg("id") id: string): Promise<Cart> {
        let cart = await Cart.findOne({ where: { id: id } })

        if (!cart) {
            throw new Error("Cart not found")
        }

        return cart
    }

    //Create a cart
    @Mutation(() => Cart)
    async createCart(@Arg("data") data: CreateCartInput): Promise<Cart> {
        
        const cart = await Cart.create(data)
        await cart.save()

        return cart
    }

    //Update a cart
    @Mutation(() => Cart)
    async updateCart(@Arg("id") id: string, @Arg("data") data: UpdateCartInput): Promise<Cart> {
        let cart = await Cart.findOne({ where: { id: id } })

        if (!cart) {
            throw new Error("Cart not found")
        }

        Object.assign(cart,data)
        await cart.save()

        return cart
    }

    //Delete a cart
    @Mutation(() => Cart)
    async deleteCart(@Arg("id") id: string): Promise<Cart> {
        let cart = await Cart.findOne({ where: { id: id } })

        if (!cart) {
            throw new Error("Cart not found")
        }

        await cart.remove()

        return cart

    
    }


}
