import * as TypeGraphQL from "type-graphql";
import { CompanyCreateManyWithoutPlatformInput } from "../inputs/CompanyCreateManyWithoutPlatformInput";
import { CountryCreateOneWithoutPlatformInput } from "../inputs/CountryCreateOneWithoutPlatformInput";
import { ProductCreateManyWithoutPlatformInput } from "../inputs/ProductCreateManyWithoutPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  link!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  label!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  intlId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  bannerImg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  platformType!: string;

  @TypeGraphQL.Field(_type => ProductCreateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  products?: ProductCreateManyWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CountryCreateOneWithoutPlatformInput, {
    nullable: false,
    description: undefined
  })
  country!: CountryCreateOneWithoutPlatformInput;

  @TypeGraphQL.Field(_type => CompanyCreateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyCreateManyWithoutPlatformInput | null;
}
