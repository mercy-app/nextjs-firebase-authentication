import * as TypeGraphQL from "type-graphql";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryFilter {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CategoryWhereInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CategoryWhereInput | null;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CategoryWhereInput | null;
}
