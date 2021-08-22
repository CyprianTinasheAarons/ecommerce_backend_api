import { InputType, Field } from "type-graphql"

@InputType()
export class UpdateCartInput {

    @Field(() => String, {nullable: true})
    userId?: string

    @Field(() => String, {nullable: true})
    items?: string

    @Field(() => Date, {nullable: true})
    updatedAt?: Date

    @Field(() => Date, {nullable: true})
    createdAt?: Date

}