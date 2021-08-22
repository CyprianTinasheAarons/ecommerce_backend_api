import { Field, ObjectType } from 'type-graphql'
import { Cart } from '../../models/cart/cart'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class CartResponse {

    @Field(() => Cart, {nullable:true})
    cart?: Cart

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
