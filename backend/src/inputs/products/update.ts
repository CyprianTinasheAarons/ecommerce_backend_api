import { InputType, Field } from "type-graphql"

@InputType()
export class UpdateProductInput {

    @Field(() =>String,{nullable:true})
    name?: string

    @Field(() =>String,{nullable:true})
    description?: string

    @Field(() =>String,{nullable:true})
    price?: number

    @Field(() =>String,{nullable:true})
    image?: string

    @Field(() =>String,{nullable:true})
    category?: string

    @Field(() =>String,{nullable:true})
    stock?: number


    @Field(() =>String,{nullable:true})
    available?: boolean

    @Field(() =>String,{nullable:true})
    createdAt?: Date

    @Field(() =>String,{nullable:true})
    updatedAt?: Date



}