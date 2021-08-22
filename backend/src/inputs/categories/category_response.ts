import { Field, ObjectType } from 'type-graphql'
import { Category } from '../../models/categories/category'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class CategoryResponse {

    @Field(() => Category, {nullable:true})
    category?: Category

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
