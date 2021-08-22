import { Field, ObjectType } from 'type-graphql'
import { Order } from '../../models/orders/order'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class OrderResponse {

    @Field(() => Order, {nullable:true})
    order?: Order

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
