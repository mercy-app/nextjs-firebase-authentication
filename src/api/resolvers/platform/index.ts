import {
    Resolver, Query, Ctx,
    Arg, ID, Mutation
} from 'type-graphql';
import { Platform } from '@prismaTypes/models/Platform'
import { isAuthenticated } from '@api/middleware/resolver/isAuthenticated';
import { ResolverContext } from '@typeDefs/resolver';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Resolver()
export default class PlatformResolver {
    @Query(returns => [Platform], { description: 'Get all the categories' })
    async platforms(): Promise<Platform[]> {
        const platforms = await prisma.platform.findMany();
        return platforms;
    }

    @Query(returns => Platform)
    async platform(
        @Arg('type', type => String) type: string
    ): Promise<Platform | undefined> {
        const platform = await prisma.platform.findOne({
            where: {
                type
            }
        })
        return platform
    }

}
