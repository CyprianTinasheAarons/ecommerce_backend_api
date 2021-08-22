import { ObjectType ,Field ,ID } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() =>String)
    @Column()
    name: string

    @Field(() =>String)
    @Column()
    description: string

    @Field(() =>Number)
    @Column()
    price: number

    @Field(() =>String)
    @Column()
    image: string

    @Field(() =>String)
    @Column()
    category: string

    @Field(() =>Number)
    @Column()
    stock: number
    
    @Field(() =>Boolean)
    @Column()
    available: boolean

    @Field(() => String, {nullable: true})
    @Column()
    createdAt?: Date

    @Field(() =>String, {nullable: true})
    @Column()
    updatedAt?: Date

}