import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { Card } from "../../../models/Card";
import { Company } from "../../../models/Company";
import { Contact } from "../../../models/Contact";
import { Customer } from "../../../models/Customer";
import { Post } from "../../../models/Post";
import { Staff } from "../../../models/Staff";
import { User } from "../../../models/User";
import { UserAddressesArgs } from "./args/UserAddressesArgs";
import { UserCardsArgs } from "./args/UserCardsArgs";
import { UserCompaniesArgs } from "./args/UserCompaniesArgs";
import { UserContactsArgs } from "./args/UserContactsArgs";
import { UserCustomerArgs } from "./args/UserCustomerArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserStaffArgs } from "./args/UserStaffArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: true,
    description: undefined,
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: true,
    description: undefined,
  })
  async companies(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCompaniesArgs): Promise<Company[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).companies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: true,
    description: undefined,
  })
  async addresses(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAddressesArgs): Promise<Address[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).addresses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Card], {
    nullable: true,
    description: undefined,
  })
  async cards(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCardsArgs): Promise<Card[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).cards(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Contact], {
    nullable: true,
    description: undefined,
  })
  async contacts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserContactsArgs): Promise<Contact[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).contacts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Staff], {
    nullable: true,
    description: undefined,
  })
  async staff(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserStaffArgs): Promise<Staff[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).staff(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Customer], {
    nullable: true,
    description: undefined,
  })
  async customer(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCustomerArgs): Promise<Customer[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).customer(args);
  }
}
