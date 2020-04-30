import * as TypeGraphQL from "type-graphql";
import { DeleteManyTagArgs } from "./args/DeleteManyTagArgs";
import { Tag } from "../../../models/Tag";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Tag)
export class DeleteManyTagResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTagArgs): Promise<BatchPayload> {
    return ctx.prisma.tag.deleteMany(args);
  }
}
