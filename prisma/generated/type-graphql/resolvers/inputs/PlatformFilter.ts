import * as TypeGraphQL from "type-graphql";
import { PlatformWhereInput } from "../inputs/PlatformWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformFilter {
  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PlatformWhereInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PlatformWhereInput | null;

  @TypeGraphQL.Field(_type => PlatformWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PlatformWhereInput | null;
}
