import * as TypeGraphQL from "type-graphql";
import { UpdateManyTagArgs } from "./args/UpdateManyTagArgs";
import { Tag } from "../../../models/Tag";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Tag)
export class UpdateManyTagResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTagArgs): Promise<BatchPayload> {
    return ctx.prisma.tag.updateMany(args);
  }
}
