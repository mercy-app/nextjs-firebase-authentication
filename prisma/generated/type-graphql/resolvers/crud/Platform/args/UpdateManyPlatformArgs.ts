import * as TypeGraphQL from "type-graphql";
import { PlatformUpdateManyMutationInput } from "../../../inputs/PlatformUpdateManyMutationInput";
import { PlatformWhereInput } from "../../../inputs/PlatformWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlatformArgs {
  @TypeGraphQL.Field(_type => PlatformUpdateManyMutationInput, { nullable: false })
  data!: PlatformUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlatformWhereInput, { nullable: true })
  where?: PlatformWhereInput | null;
}
