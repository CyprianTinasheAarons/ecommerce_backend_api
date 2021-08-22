import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { Category } from "../../models/categories/category"
import { CreateCategoryInput } from "../../inputs/categories/create"
import { UpdateCategoryInput } from "../../inputs/categories/update"


@Resolver()
export class CategoryResolver {

    //Get all categorys
    @Query(() => [Category])
    getCategories(): Promise<Category[]> {
        return Category.find()
    }

    //Get a category by id
    @Query(() => Category)
    async getCategory(@Arg("id") id: string): Promise<Category> {
        let category = await Category.findOne({ where: { id: id } })

        if (!category) {
            throw new Error("Category not found")
        }

        return category


    }

    //Create a category
    @Mutation(() => Category)
    async createCategory(@Arg("data") data: CreateCategoryInput): Promise<Category> {
        
        const category = await Category.create(data)
        await category.save()

        return category
    }

    //Update a category
    @Mutation(() => Category)
    async updateCategory(@Arg("id") id: string, @Arg("data") data: UpdateCategoryInput): Promise<Category> {
        let category = await Category.findOne({ where: { id: id } })

        if (!category) {
            throw new Error("Category not found")
        }

        Object.assign(category,data)
        await category.save()

        return category
    }

    //Delete a category
    @Mutation(() => Category)
    async deleteCategory(@Arg("id") id: string): Promise<Category> {
        let category = await Category.findOne({ where: { id: id } })

        if (!category) {
            throw new Error("Category not found")
        }

        await category.remove()

        return category
    }


}