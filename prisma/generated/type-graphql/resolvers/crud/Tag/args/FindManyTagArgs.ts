import * as TypeGraphQL from "type-graphql";
import { TagOrderByInput } from "../../../inputs/TagOrderByInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyTagArgs {
  @TypeGraphQL.Field(_type => TagWhereInput, { nullable: true })
  where?: TagWhereInput | null;

  @TypeGraphQL.Field(_type => TagOrderByInput, { nullable: true })
  orderBy?: TagOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, { nullable: true })
  after?: TagWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, { nullable: true })
  before?: TagWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
