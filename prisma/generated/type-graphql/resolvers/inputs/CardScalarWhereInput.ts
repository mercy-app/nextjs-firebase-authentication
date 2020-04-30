import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardScalarWhereInput {
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

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CardScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CardScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CardScalarWhereInput[] | null;
}
