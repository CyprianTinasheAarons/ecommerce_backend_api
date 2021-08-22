import { Field, ObjectType } from 'type-graphql'
import { Payment } from '../../models/payments/payment'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class PaymentResponse {

    @Field(() => Payment, {nullable:true})
    payment?: Payment

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
