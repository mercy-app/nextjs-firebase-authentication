import * as TypeGraphQL from "type-graphql";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyDataInput } from "../inputs/PlatformUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => PlatformScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PlatformScalarWhereInput;

  @TypeGraphQL.Field(_type => PlatformUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PlatformUpdateManyDataInput;
}
