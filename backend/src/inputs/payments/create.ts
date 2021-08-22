import { InputType, Field } from "type-graphql"

@InputType()
export class CreatePaymentInput {


    @Field(() => String)
    userId: string

    @Field(() => String)
    paymentType: string

    @Field(() => String)
    paymentMethod: string

    @Field(() => String)
    paymentStatus: string

    @Field(() =>Number)
    paymentAmount: number

    @Field(() => String)
    paymentCurrency: string

    @Field(() => String)
    paymentToken: string

    @Field(() => String)
    paymentDate: string


}