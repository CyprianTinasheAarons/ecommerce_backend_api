import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Product } from "../../models/products/product"
import { CreateProductInput } from "../../inputs/products/create"
import { UpdateProductInput } from "../../inputs/products/update"


@Resolver()
export class ProductResolver {

    //Get all products
    @Query(() => [Product])
    getProducts(): Promise<Product[]> {
        return Product.find()
    }

    //Get a product by id
    @Query(() => Product)
    async getProduct(@Arg("id") id: string): Promise<Product> {
        let product = await Product.findOne({ where: { id: id } })

        if (!product) {
            throw new Error("Product not found")
        }

        return product


    }

    //Get products by Category


    //Create a product
    @Mutation(() => Product)
    async createProduct(@Arg("data") data: CreateProductInput): Promise<Product> {
        
        const product = await Product.create(data)
        await product.save()

        return product
    }

    //Update a product
    @Mutation(() => Product)
    async updateProduct(@Arg("id") id: string, @Arg("data") data: UpdateProductInput): Promise<Product> {
        let product = await Product.findOne({ where: { id: id } })

        if (!product) {
            throw new Error("Product not found")
        }

        Object.assign(product,data)
        await product.save()

        return product
    }

    //Delete a product
    @Mutation(() => Product)
    async deleteProduct(@Arg("id") id: string): Promise<Product> {
        let product = await Product.findOne({ where: { id: id } })

        if (!product) {
            throw new Error("Product not found")
        }

        await product.remove()

        return product
    }


}