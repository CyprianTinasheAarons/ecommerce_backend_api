import { InputType, Field } from "type-graphql"

@InputType()
export class UpdateOrderInput {


    @Field(() =>String, {nullable: true})
    userId?: string

    @Field(() => String, {nullable: true})
    items?: string

    @Field(() => String, {nullable: true})
    total?: string

    @Field(() => String, {nullable: true})
    status?: string

    @Field(() => String, {nullable: true})
    payment?: string

    @Field(() => String, {nullable: true})
    shipping?: string

    @Field(() => String, {nullable: true})
    createdAt?: string

    @Field(() => String, {nullable: true})
    updatedAt?: string

}
