import * as TypeGraphQL from "type-graphql";
import { CreateOneContactArgs } from "./args/CreateOneContactArgs";
import { DeleteManyContactArgs } from "./args/DeleteManyContactArgs";
import { DeleteOneContactArgs } from "./args/DeleteOneContactArgs";
import { FindManyContactArgs } from "./args/FindManyContactArgs";
import { FindOneContactArgs } from "./args/FindOneContactArgs";
import { UpdateManyContactArgs } from "./args/UpdateManyContactArgs";
import { UpdateOneContactArgs } from "./args/UpdateOneContactArgs";
import { UpsertOneContactArgs } from "./args/UpsertOneContactArgs";
import { Contact } from "../../../models/Contact";
import { AggregateContact } from "../../outputs/AggregateContact";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Contact)
export class ContactCrudResolver {
  @TypeGraphQL.Query(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async contact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Contact], {
    nullable: false,
    description: undefined
  })
  async contacts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyContactArgs): Promise<Contact[]> {
    return ctx.prisma.contact.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async createOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneContactArgs): Promise<Contact> {
    return ctx.prisma.contact.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async deleteOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: true,
    description: undefined
  })
  async updateOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneContactArgs): Promise<Contact | null> {
    return ctx.prisma.contact.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyContactArgs): Promise<BatchPayload> {
    return ctx.prisma.contact.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Contact, {
    nullable: false,
    description: undefined
  })
  async upsertOneContact(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneContactArgs): Promise<Contact> {
    return ctx.prisma.contact.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateContact, {
    nullable: false,
    description: undefined
  })
  async aggregateContact(): Promise<AggregateContact> {
    return new AggregateContact();
  }
}
