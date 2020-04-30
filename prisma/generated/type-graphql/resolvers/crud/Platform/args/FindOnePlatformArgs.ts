import * as TypeGraphQL from "type-graphql";
import { PlatformWhereUniqueInput } from "../../../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOnePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, { nullable: false })
  where!: PlatformWhereUniqueInput;
}
