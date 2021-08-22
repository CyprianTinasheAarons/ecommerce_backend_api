import { Field, ObjectType } from 'type-graphql'
import { Product } from '../../models/products/product'
import { FieldError } from "../../inputs/field_error"

@ObjectType()
export class ProductResponse {

    @Field(() => Product, {nullable:true})
    product?: Product

    @Field(() => [FieldError], {nullable:true})
    errors: FieldError[]

}
