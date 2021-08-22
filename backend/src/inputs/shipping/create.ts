import { InputType, Field } from "type-graphql"

@InputType()
export class CreateShippingInput {
    @Field(() => String)
    address: string

    @Field(() => String)
    city: string

    @Field(() => String)
    country: string

    @Field(() => String)
    notes: string

    @Field(() => String)
    orderNumber: string

    @Field(() => String)
    status: string

    @Field(()=> Date)
    createdAt: Date

    @Field(() => Date, {nullable:true})
    updatedAt?: Date

}
