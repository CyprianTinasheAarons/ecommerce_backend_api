import { ObjectType ,Field ,ID } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Order extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() =>String)
    @Column()
    userId: string

    @Field(() => String)
    @Column()
    items: string

    @Field(() => Number)
    @Column()
    total: number

    @Field(() => String)
    @Column()
    status: string

    @Field(() => String)
    @Column()
    payment: string

    @Field(() => String)
    @Column()
    shipping: string

    @Field(() => String)
    @Column()
    createdAt: string

    @Field(() => String, {nullable:true })
    @Column()
    updatedAt?: string

}