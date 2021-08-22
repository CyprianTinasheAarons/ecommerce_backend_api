import { ObjectType ,Field ,ID } from "type-graphql"
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Cart extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() =>String)
    @Column()
    userId: string

    @Field(() => String)
    @Column()
    items: string

    @Field(() => Date)
    @Column()
    createdAt: Date

    @Field(() => Date, {nullable: true})
    @Column()
    updatedAt?: Date

}