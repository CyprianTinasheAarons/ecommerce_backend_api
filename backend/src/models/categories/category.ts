import { ObjectType ,Field ,ID } from "type-graphql"
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Category extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() =>String)
    @Column()
    name: string

    @Field(() => String)
    @Column()
    description: string

    @Field(() => String)
    @Column()
    image: string

    @Field(() => Date, {nullable: true})
    @Column()
    createdAt?: Date

    @Field(() => Date, {nullable: true})
    @Column()
    updatedAt?: Date

}