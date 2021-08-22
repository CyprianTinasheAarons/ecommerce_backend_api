import { InputType, Field } from "type-graphql"

@InputType()
export class UpdateCategoryInput {

    @Field(() => String, {nullable: true})
    name?: string

    @Field(() => String, {nullable: true})
    description?: string

    @Field(() => String, {nullable: true})
    image?: string

    @Field(() => Date, {nullable: true})
    updatedAt?: Date

    @Field(() => Date, {nullable: true})
    createdAt?: Date

}
