import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
// import Category from './category.type';
import { Category } from '@prismaTypes/models/Category'
import AddCategoryInput from './category.input_type';
import { isAuthenticated } from '@api/middleware/resolver/isAuthenticated';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Resolver()
export default class CategoryResolver {
    @Query(returns => [Category], { description: 'Get all the categories' })
    async categories(
        @Arg('type', { nullable: true }) type?: string,
        @Arg('searchBy', { defaultValue: '' }) searchBy?: string
    ): Promise<Category[]> {
        const categories = await prisma.category.findMany({
            where: {
                name: {
                    startsWith: searchBy,
                },
                type
            }
        })
        return categories
    }

    @Query(() => [Category], { description: 'Get all the categories by type' })
    async categoriesByType(
        @Arg('type', type => String) type: string
    ): Promise<Category[]> {
        const categories = await prisma.category.findMany({
            where: {
                type
            }
        })
        return categories
    }

    @Query(returns => Category)
    async category(
        @Arg('id', type => ID) id: string
    ): Promise<Category | undefined> {
        const category = await prisma.category.findOne({
            where: {
                id
            }
        })
        return category
    }

    // TODO: add super admin permission
    @Mutation(() => Category, { description: 'Create Category' })
    async createCategory(
        @Arg('category') category: AddCategoryInput
    ): Promise<Category> {
        const newCategory = await prisma.category.create(category)

        return newCategory;
    }
}
