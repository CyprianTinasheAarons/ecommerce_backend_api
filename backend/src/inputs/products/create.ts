import { InputType, Field } from "type-graphql"

@InputType()
export class CreateProductInput {

    @Field(() =>String)
    name: string

    @Field(() =>String)
    description: string

    @Field(() =>Number)
    price: number

    @Field(() =>String)
    image: string

    @Field(() =>String)
    category: string

    @Field(() =>Number)
    stock: number

    @Field(() => Boolean)
    available: boolean

    @Field(() =>String)
    createdAt: Date

    @Field(() => String, {nullable: true})
    updatedAt?: Date

}