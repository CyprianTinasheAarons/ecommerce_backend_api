import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Delivery } from "../../models/shipping/delivery"
import { CreateShippingInput } from "../../inputs/shipping/create"
import { UpdateShippingInput } from "../../inputs/shipping/update"

@Resolver()
export class DeliveryResolver {

    //Create Delivery
    @Mutation(() => Delivery)
    async createDelivery(@Arg("data") data: CreateShippingInput): Promise<Delivery> {
        let delivery = await Delivery.create(data)
        await delivery.save()

        return delivery
    }

}