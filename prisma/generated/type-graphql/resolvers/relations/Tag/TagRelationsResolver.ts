import * as TypeGraphQL from "type-graphql";
import { Tag } from "../../../models/Tag";
import { TagsOnPosts } from "../../../models/TagsOnPosts";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { TagPostsArgs } from "./args/TagPostsArgs";
import { TagProductsArgs } from "./args/TagProductsArgs";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TagsOnPosts], {
    nullable: true,
    description: undefined,
  })
  async posts(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagPostsArgs): Promise<TagsOnPosts[] | null> {
    return ctx.prisma.tag.findOne({
      where: {
        id: tag.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnProducts], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagProductsArgs): Promise<TagsOnProducts[] | null> {
    return ctx.prisma.tag.findOne({
      where: {
        id: tag.id,
      },
    }).products(args);
  }
}
