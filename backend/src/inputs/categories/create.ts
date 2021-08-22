import { InputType, Field } from "type-graphql"

@InputType()
export class CreateCategoryInput {


    @Field(() =>String)
    name: string

    @Field(() => String)
    description: string

    @Field(() => String)
    image: string

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date

}
