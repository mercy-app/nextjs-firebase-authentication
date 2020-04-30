import * as TypeGraphQL from "type-graphql";
import { UpdateManyTagsOnProductsArgs } from "./args/UpdateManyTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class UpdateManyTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagsOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnProducts.updateMany(args);
  }
}
