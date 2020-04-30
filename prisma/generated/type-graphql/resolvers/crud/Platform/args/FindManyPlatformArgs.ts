import * as TypeGraphQL from "type-graphql";
import { PlatformOrderByInput } from "../../../inputs/PlatformOrderByInput";
import { PlatformWhereInput } from "../../../inputs/PlatformWhereInput";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyPlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereInput, { nullable: true })
  where?: PlatformWhereInput | null;

  @TypeGraphQL.Field(_type => PlatformOrderByInput, { nullable: true })
  orderBy?: PlatformOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, { nullable: true })
  after?: PlatformWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, { nullable: true })
  before?: PlatformWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
