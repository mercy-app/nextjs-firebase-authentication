import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  type?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  cardType?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  lastFourDigit?: IntFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringFilter | null;

  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CardWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CardWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CardWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CardWhereInput[] | null;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  user?: UserWhereInput | null;
}
