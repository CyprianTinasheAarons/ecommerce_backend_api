import { InputType, Field } from "type-graphql"

@InputType()
export class CreateCartInput {

    @Field(() =>String)
    userId: string

    @Field(() => String)
    items: string

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date, { nullable: true })
    updatedAt?: Date

}