import { InputType, Field } from "type-graphql"

@InputType()
export class UpdatePaymentInput {


    @Field(() => String ,{nullable: true})
    userId?: string

    @Field(() => String ,{nullable:true})
    paymentType?: string

    @Field(() => String ,{nullable:true})
    paymentMethod?: string

    @Field(() => String ,{nullable:true})
    paymentStatus?: string

    @Field(() =>Number, {nullable:true})
    paymentAmount?: number

    @Field(() => String ,{nullable:true})
    paymentCurrency?: string

    @Field(() => String ,{nullable:true})
    paymentToken?: string

    @Field(() => String ,{nullable:true})
    paymentDate?: string
}