import * as TypeGraphQL from "type-graphql";
import { CardWhereInput } from "../inputs/CardWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardFilter {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CardWhereInput | null;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CardWhereInput | null;

  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CardWhereInput | null;
}
