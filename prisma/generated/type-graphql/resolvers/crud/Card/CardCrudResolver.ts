import * as TypeGraphQL from "type-graphql";
import { CreateOneCardArgs } from "./args/CreateOneCardArgs";
import { DeleteManyCardArgs } from "./args/DeleteManyCardArgs";
import { DeleteOneCardArgs } from "./args/DeleteOneCardArgs";
import { FindManyCardArgs } from "./args/FindManyCardArgs";
import { FindOneCardArgs } from "./args/FindOneCardArgs";
import { UpdateManyCardArgs } from "./args/UpdateManyCardArgs";
import { UpdateOneCardArgs } from "./args/UpdateOneCardArgs";
import { UpsertOneCardArgs } from "./args/UpsertOneCardArgs";
import { Card } from "../../../models/Card";
import { AggregateCard } from "../../outputs/AggregateCard";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Card)
export class CardCrudResolver {
  @TypeGraphQL.Query(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async card(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Card], {
    nullable: false,
    description: undefined
  })
  async cards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCardArgs): Promise<Card[]> {
    return ctx.prisma.card.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async createOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCardArgs): Promise<Card> {
    return ctx.prisma.card.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async deleteOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async updateOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCardArgs): Promise<BatchPayload> {
    return ctx.prisma.card.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async upsertOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCardArgs): Promise<Card> {
    return ctx.prisma.card.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCard, {
    nullable: false,
    description: undefined
  })
  async aggregateCard(): Promise<AggregateCard> {
    return new AggregateCard();
  }
}
