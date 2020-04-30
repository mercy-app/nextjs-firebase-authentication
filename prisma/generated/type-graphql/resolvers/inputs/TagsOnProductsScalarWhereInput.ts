import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProductsScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  tagId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TagsOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TagsOnProductsScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [TagsOnProductsScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TagsOnProductsScalarWhereInput[] | null;
}
