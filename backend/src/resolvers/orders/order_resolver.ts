import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Order } from "../../models/orders/order"
import { CreateOrderInput } from "../../inputs/orders/create"
import { UpdateOrderInput } from "../../inputs/orders/update"

@Resolver()
export class OrderResolver {


    //Get all orders
    @Query(() => [Order])
    getOrders(): Promise<Order[]> {
        return Order.find()
    }

    //Get a order by id
    @Query(() => Order)
    async getOrder(@Arg("id") id: string): Promise<Order> {
        let order = await Order.findOne({ where: { id: id } })

        if (!order) {
            throw new Error("Order not found")
        }

        return order


    }

    //Create a order
    @Mutation(() => Order)
    async createOrder(@Arg("data") data: CreateOrderInput): Promise<Order> {
        
        const order = await Order.create(data)
        await order.save()

        return order
    }

    //Update a order
    @Mutation(() => Order)
    async updateOrder(@Arg("id") id: string, @Arg("data") data: UpdateOrderInput): Promise<Order> {
        let order = await Order.findOne({ where: { id: id } })

        if (!order) {
            throw new Error("Order not found")
        }

        Object.assign(order,data)
        await order.save()

        return order
    }

    //Delete a order
    @Mutation(() => Order)
    async deleteOrder(@Arg("id") id: string): Promise<Order> {
        let order = await Order.findOne({ where: { id: id } })

        if (!order) {
            throw new Error("Order not found")
        }

        await order.remove()

        return order
    }


}