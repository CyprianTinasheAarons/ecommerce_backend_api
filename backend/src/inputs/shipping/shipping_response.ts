import { Field, ObjectType } from 'type-graphql'
import { Delivery } from '../../models/shipping/delivery'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class ShippingResponse {

    @Field(() => Delivery, {nullable:true})
    delivery?: Delivery

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
