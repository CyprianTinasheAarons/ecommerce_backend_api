import { Field, ObjectType } from 'type-graphql';
import { User } from '../../models/users/user_model';
import { FieldError } from "../../inputs/field_error";

@ObjectType()
export class UserResponse {

    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;

    @Field(() => String, { nullable: true })
    token?: string;
}
