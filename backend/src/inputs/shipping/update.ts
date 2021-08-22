import { InputType, Field } from "type-graphql"

@InputType()
export class UpdateShippingInput {

    @Field(() => String,{nullable:true})
    address?: string

    @Field(() => String,{nullable:true})
    city?: string

    @Field(() => String,{nullable:true})
    country?: string

    @Field(() => String,{nullable:true})
    notes?: string

    @Field(() => String,{nullable:true})
    orderNumber?: string

    @Field(() => String,{nullable:true})
    status?: string

    @Field(() =>Date,{nullable:true})
    updatedAt?: Date
    
}
