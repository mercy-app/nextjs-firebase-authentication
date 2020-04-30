import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateManyWithoutProductInput } from "../inputs/CategoriesOnProductsCreateManyWithoutProductInput";
import { CompanyCreateOneWithoutProductsInput } from "../inputs/CompanyCreateOneWithoutProductsInput";
import { OrderItemCreateManyWithoutProductInput } from "../inputs/OrderItemCreateManyWithoutProductInput";
import { PlatformCreateOneWithoutProductsInput } from "../inputs/PlatformCreateOneWithoutProductsInput";
import { RoomCreateManyWithoutProductInput } from "../inputs/RoomCreateManyWithoutProductInput";
import { TagsOnProductsCreateManyWithoutProductInput } from "../inputs/TagsOnProductsCreateManyWithoutProductInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateWithoutProductsOnCounponInput {
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
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  price?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  slug!: string;

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
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  image!: string;

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  company!: CompanyCreateOneWithoutProductsInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoriesOnProductsCreateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => PlatformCreateOneWithoutProductsInput, {
    nullable: false,
    description: undefined
  })
  platform!: PlatformCreateOneWithoutProductsInput;

  @TypeGraphQL.Field(_type => TagsOnProductsCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  tags?: TagsOnProductsCreateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => OrderItemCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  orders?: OrderItemCreateManyWithoutProductInput | null;

  @TypeGraphQL.Field(_type => RoomCreateManyWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  room?: RoomCreateManyWithoutProductInput | null;
}
