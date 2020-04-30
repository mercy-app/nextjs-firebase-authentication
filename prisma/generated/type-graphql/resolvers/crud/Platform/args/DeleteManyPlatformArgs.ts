import * as TypeGraphQL from "type-graphql";
import { PlatformWhereInput } from "../../../inputs/PlatformWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlatformArgs {
  @TypeGraphQL.Field(_type => PlatformWhereInput, { nullable: true })
  where?: PlatformWhereInput | null;
}
