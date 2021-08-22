import { InputType, Field } from "type-graphql"

@InputType()
export class CreateOrderInput {


    @Field(() =>String)
    userId: string

    @Field(() => String)
    items: string

    @Field(() => Number)
    total: number

    @Field(() => String)
    status: string

    @Field(() => String)
    payment: string

    @Field(() => String)
    shipping: string

    @Field(() => String)
    createdAt: string

    @Field(() => String, {nullable: true})
    updatedAt?: string

}
