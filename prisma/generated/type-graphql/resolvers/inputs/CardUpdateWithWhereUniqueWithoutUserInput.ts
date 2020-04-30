import * as TypeGraphQL from "type-graphql";
import { CardUpdateWithoutUserDataInput } from "../inputs/CardUpdateWithoutUserDataInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CardWhereUniqueInput;

  @TypeGraphQL.Field(_type => CardUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CardUpdateWithoutUserDataInput;
}
