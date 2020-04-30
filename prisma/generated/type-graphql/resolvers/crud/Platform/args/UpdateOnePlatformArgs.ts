import * as TypeGraphQL from "type-graphql";
import { PlatformUpdateInput } from "../../../inputs/PlatformUpdateInput";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformUpdateInput, { nullable: false })
  data!: PlatformUpdateInput;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, { nullable: false })
  where!: PlatformWhereUniqueInput;
}
