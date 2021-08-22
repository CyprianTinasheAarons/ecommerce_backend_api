import 'reflect-metadata'
import { createConnection, Server } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from '../backend/src/resolvers/users/user_resolver'
import { CategoryResolver } from '../backend/src/resolvers/categories/category_resolver'
import { ProductResolver } from '../backend/src/resolvers/products/product_resolver'
import { CartResolver } from '../backend/src/resolvers/cart/cart_resolver'
import { OrderResolver } from "../backend/src/resolvers/orders/order_resolver"
import { PaymentResolver } from "../backend/src/resolvers/payments/payment_resolver"
import { DeliveryResolver } from "../backend/src/resolvers/shipping/delivery_resolver"


async function runServer() {
    const connection = await createConnection()
    const schema = await buildSchema({
        resolvers: [UserResolver , CategoryResolver, ProductResolver ,CartResolver,OrderResolver,PaymentResolver,DeliveryResolver ]
    })
    const apolloServer = new ApolloServer({ schema })
    await apolloServer.listen(8090)

    console.log('GraphQL Server is running on port 8090')

}

runServer()