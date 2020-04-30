import * as TypeGraphQL from "type-graphql";
import { StaffWhereInput } from "../inputs/StaffWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffFilter {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: StaffWhereInput | null;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: StaffWhereInput | null;

  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: StaffWhereInput | null;
}
