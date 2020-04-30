import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductsOnCounponScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  couponId?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ProductsOnCounponScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ProductsOnCounponScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [ProductsOnCounponScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ProductsOnCounponScalarWhereInput[] | null;
}
