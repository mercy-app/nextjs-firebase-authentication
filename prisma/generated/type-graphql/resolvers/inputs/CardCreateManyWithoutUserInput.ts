import * as TypeGraphQL from "type-graphql";
import { CardCreateWithoutUserInput } from "../inputs/CardCreateWithoutUserInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CardCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CardWhereUniqueInput[] | null;
}
