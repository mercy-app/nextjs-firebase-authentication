import * as TypeGraphQL from "type-graphql";
import { PlatformCreateInput } from "../../../inputs/PlatformCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlatformArgs {
  @TypeGraphQL.Field(_type => PlatformCreateInput, { nullable: false })
  data!: PlatformCreateInput;
}
