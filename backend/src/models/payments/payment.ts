import { ObjectType ,Field ,ID } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Payment extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => String)
    @Column()
    userId: string

    @Field(() => String)
    @Column()
    paymentType: string

    @Field(() => String)
    @Column()
    paymentMethod: string

    @Field(() => String)
    @Column()
    paymentStatus: string

    @Field(() =>Number)
    @Column()
    paymentAmount: number

    @Field(() => String)
    @Column()
    paymentCurrency: string

    @Field(() => String)
    @Column()
    paymentToken: string

    @Field(() => String)
    @Column()
    paymentDate: string

}