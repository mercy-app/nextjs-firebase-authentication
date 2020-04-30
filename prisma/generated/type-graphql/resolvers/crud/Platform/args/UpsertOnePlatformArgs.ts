import * as TypeGraphQL from "type-graphql";
import { PlatformCreateInput } from "../../../inputs/PlatformCreateInput";
import { PlatformUpdateInput } from "../../../inputs/PlatformUpdateInput";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, { nullable: false })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformCreateInput, { nullable: false })
  create!: PlatformCreateInput;

  @TypeGraphQL.Field(_type => PlatformUpdateInput, { nullable: false })
  update!: PlatformUpdateInput;
}
