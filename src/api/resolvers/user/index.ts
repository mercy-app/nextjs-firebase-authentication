import {
  ObjectType,
  Field,
  Ctx,
  Resolver,
  Query,
  UseMiddleware,
  Arg,
  Mutation,
} from 'type-graphql';

import { ResolverContext } from '@typeDefs/resolver';
import { isAuthenticated } from '@api/middleware/resolver/isAuthenticated';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


@ObjectType()
class User {
  @Field()
  uid: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field(type => [String])
  roles: string[];
}

@Resolver()
export default class UserResolver {
  @Query(() => User)
  @UseMiddleware(isAuthenticated)
  async me(@Ctx() ctx: ResolverContext): Promise<User> {
    const rolesObject = ctx.me!.customClaims || {};

    const roles = Object.keys(rolesObject).filter(
      key => rolesObject[key]
    );

    return {
      uid: ctx.me!.uid,
      email: ctx.me!.email || '',
      username: ctx.me!.displayName || '',
      roles,
    };
  }


  @Mutation(() => User)
  @UseMiddleware(isAuthenticated)
  async updateAddress(
    @Arg('id') id: string,

    @Arg('type') type: string,
    @Arg('json') json: string,
    @Arg('info') info: string,

    @Ctx() ctx: ResolverContext): Promise<User> {
    if (id) {
      const address = await prisma.address.update({
        where: { id },
        data: {
          json,
          type,
          name,
          info
        }
      });
      const user = await prisma.user.findOne({
        where: {
          id: ctx.me.uid
        },
        include: {
          addresses: true,
          cards: true,
          contacts: true
        }
      });
      return user;
    } else {
      const user = await prisma.user.update({
        where: { id: ctx.me.uid },
        data: {
          addresses: {
            create: {
              json,
              type,
              name,
              info
            }
          }
        },
        include: {
          addresses: true,
          cards: true,
          contacts: true
        }
      });
      return user;
    }
  }

  @Mutation(() => User)
  @UseMiddleware(isAuthenticated)
  async updateContact(
    @Arg('id') id: string,

    @Arg('type') type: string,
    @Arg('number') number: string,

    @Ctx() ctx: ResolverContext): Promise<User> {
    if (id) {
      const contact = await prisma.contact.update({
        where: { id },
        data: {
          type,
          number
        }
      });
      const user = await prisma.user.findOne({
        where: {
          id: ctx.me.uid
        },
        include: {
          addresses: true,
          cards: true,
          contacts: true
        }
      });
      return user;
    } else {
      const user = await prisma.user.update({
        where: { id: ctx.me.uid },
        data: {
          contacts: {
            create: {
              type,
              number
            }
          }
        },
        include: {
          addresses: true,
          cards: true,
          contacts: true
        }
      });
      return user;
    }
  }
}
