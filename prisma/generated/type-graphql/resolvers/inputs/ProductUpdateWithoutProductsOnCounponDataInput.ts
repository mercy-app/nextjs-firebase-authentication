import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsUpdateManyWithoutProductInput } from "../inputs/CategoriesOnProductsUpdateManyWithoutProductInput";
import { CompanyUpdateOneRequiredWithoutProductsInput } from "../inputs/CompanyUpdateOneRequiredWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductInput } from "../inputs/OrderItemUpdateManyWithoutProductInput";
import { PlatformUpdateOneRequiredWithoutProductsInput } from "../inputs/PlatformUpdateOneRequiredWithoutProductsInput";
import { RoomUpdateManyWithoutProductInput } from "../inputs/RoomUpdateManyWithoutProductInput";
import { TagsOnProductsUpdateManyWithoutProductInput } from "../inputs/TagsOnProductsUpdateManyWithoutProductInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateWithoutProductsOnCounponDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  price?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  slug?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  unit?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  salePrice?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  discountInPercent?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneRequiredWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnProductsUpdateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutProductsInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformUpdateOneRequiredWithoutProductsInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  tags?: TagsOnProductsUpdateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  orders?: OrderItemUpdateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => RoomUpdateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  room?: RoomUpdateManyWithoutProductInput | null;
}
