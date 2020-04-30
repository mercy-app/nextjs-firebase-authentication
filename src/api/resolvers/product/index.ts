import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
// import loadProducts from '../../data/product.data';
// import Product from './product.type';
import { Product, ProductCreateInput } from '@prismaTypes'
import Products from './products.type';
import GetProductsArgs from './product.args_type';
// import AddProductInput from './product.input_type';
// import search from '../../helpers/search';
// import shuffle from '../../helpers/shuffle';
// import { sortByHighestNumber, sortByLowestNumber } from '../../helpers/sorts';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Resolver()
export default class ProductResolver {

    @Query(returns => Products, { description: 'Get all the products' })
    async products(
        @Args()
        { limit, offset, sortByPrice, type, searchText, category }: GetProductsArgs
    ): Promise<Products> {
        const orderBy = sortByPrice === "highestToLowest" ? "desc" : "asc"
        const products = await prisma.product.findMany({
            where: {
                type,
                title: {
                    startsWith: searchText
                },
                category: {
                    every: {
                        slug: category
                    }
                }
            },
            orderBy: {
                price: orderBy
            },
            first: limit,
            skip: offset
        })

        const totalProductsCount = await prisma.product.count()
        const hasMore = (offset + limit) < totalProductsCount

        return {
            items: products,
            totalCount: products.length,
            hasMore,
        };
    }

    @Query(() => Product)
    async product(@Arg('slug') slug: string): Promise<Product | undefined> {
        const product = await prisma.product.findOne({
            where: {
                slug
            }
        })
        return product;
    }

    @Mutation(() => Product, { description: 'Create Category' })
    async createProduct(
        @Arg('product') product: ProductCreateInput
    ): Promise<Product> {

        const newProduct = await prisma.product.create(product)
        return newProduct;
    }
}
