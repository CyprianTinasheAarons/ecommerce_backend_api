import { ObjectType ,Field ,ID } from "type-graphql"
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Delivery extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String)
    @Column()
    address: string

    @Field(() => String)
    @Column()
    city: string

    @Field(() => String)
    @Column()
    country: string

    @Field(() => String)
    @Column()
    notes: string

    @Field(() => String)
    @Column()
    orderNumber: string

    @Field(() => String)
    @Column()
    status: string

    @Field(()=> Date)
    @Column()
    createdAt: Date

    @Field(() => Date, {nullable: true})
    @Column()
    updatedAt?: Date
    

}