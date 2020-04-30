import * as TypeGraphQL from "type-graphql";
import { UserUpdateOneRequiredWithoutCardsInput } from "../inputs/UserUpdateOneRequiredWithoutCardsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  cardType?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  lastFourDigit?: number | null;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCardsInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneRequiredWithoutCardsInput | null;
}
