import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutCardsInput } from "../inputs/UserCreateOneWithoutCardsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  cardType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  lastFourDigit!: number;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutCardsInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutCardsInput;
}
