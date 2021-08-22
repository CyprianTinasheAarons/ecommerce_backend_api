import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Payment } from "../../models/payments/payment"
import { CreatePaymentInput } from "../../inputs/payments/create"
import { UpdatePaymentInput } from "../../inputs/payments/update"

@Resolver()
export class PaymentResolver {

    //Get all payments
    @Query(() => [Payment])
    getPayments(): Promise<Payment[]> {
        return Payment.find()
    }

    //create a payment
    @Mutation(() => Payment)
    async createPayment(@Arg("data") data: CreatePaymentInput): Promise<Payment> {
        
        const payment = await Payment.create(data)
        await payment.save()

        return payment
    }

    //update a payment
    @Mutation(() => Payment)
    async updatePaymenr(@Arg("id") id: string, @Arg("data") data: UpdatePaymentInput): Promise<Payment> {
        let payment = await Payment.findOne({
            where: { id: id }
        })

        if (!payment) {
            throw new Error("Payment not found")
        }

        Object.assign(payment, data)
        await payment.save()

        return payment
    }

}