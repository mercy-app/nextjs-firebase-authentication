import * as TypeGraphQL from "type-graphql";
import { Address } from "../../../models/Address";
import { Company } from "../../../models/Company";
import { Contact } from "../../../models/Contact";
import { Country } from "../../../models/Country";
import { Customer } from "../../../models/Customer";
import { Order } from "../../../models/Order";
import { Platform } from "../../../models/Platform";
import { Product } from "../../../models/Product";
import { Staff } from "../../../models/Staff";
import { User } from "../../../models/User";
import { CompanyCustomersArgs } from "./args/CompanyCustomersArgs";
import { CompanyOrderArgs } from "./args/CompanyOrderArgs";
import { CompanyProductsArgs } from "./args/CompanyProductsArgs";
import { CompanyStaffsArgs } from "./args/CompanyStaffsArgs";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Address, {
    nullable: false,
    description: undefined,
  })
  async address(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<Address> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).address({});
  }

  @TypeGraphQL.FieldResolver(_type => Contact, {
    nullable: false,
    description: undefined,
  })
  async contact(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<Contact> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).contact({});
  }

  @TypeGraphQL.FieldResolver(_type => Platform, {
    nullable: false,
    description: undefined,
  })
  async platform(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<Platform> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).platform({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async owner(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Country, {
    nullable: true,
    description: undefined,
  })
  async country(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<Country | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).country({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyProductsArgs): Promise<Product[] | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).products(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Staff], {
    nullable: true,
    description: undefined,
  })
  async staffs(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyStaffsArgs): Promise<Staff[] | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).staffs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Customer], {
    nullable: true,
    description: undefined,
  })
  async customers(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyCustomersArgs): Promise<Customer[] | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).customers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: true,
    description: undefined,
  })
  async order(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyOrderArgs): Promise<Order[] | null> {
    return ctx.prisma.company.findOne({
      where: {
        id: company.id,
      },
    }).order(args);
  }
}
