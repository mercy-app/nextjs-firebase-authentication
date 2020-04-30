import * as TypeGraphQL from "type-graphql";
import { DeleteManyTagsOnProductsArgs } from "./args/DeleteManyTagsOnProductsArgs";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class DeleteManyTagsOnProductsResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTagsOnProducts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagsOnProductsArgs): Promise<BatchPayload> {
    return ctx.prisma.tagsOnProducts.deleteMany(args);
  }
}
