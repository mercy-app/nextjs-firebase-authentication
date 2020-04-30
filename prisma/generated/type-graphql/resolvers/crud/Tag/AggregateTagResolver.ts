import * as TypeGraphQL from "type-graphql";
import { Tag } from "../../../models/Tag";
import { AggregateTag } from "../../outputs/AggregateTag";

@TypeGraphQL.Resolver(_of => Tag)
export class AggregateTagResolver {
  @TypeGraphQL.Query(_returns => AggregateTag, {
    nullable: false,
    description: undefined
  })
  async aggregateTag(): Promise<AggregateTag> {
    return new AggregateTag();
  }
}
