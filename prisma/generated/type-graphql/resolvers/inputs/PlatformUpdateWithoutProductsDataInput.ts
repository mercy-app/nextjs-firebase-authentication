import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateManyWithoutPlatformInput } from "../inputs/CategoryUpdateManyWithoutPlatformInput";
import { CompanyUpdateManyWithoutPlatformInput } from "../inputs/CompanyUpdateManyWithoutPlatformInput";
import { CountryUpdateOneRequiredWithoutPlatformInput } from "../inputs/CountryUpdateOneRequiredWithoutPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateWithoutProductsDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  link?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  label?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  intlId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  bannerImg?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  typeSlug?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  platformType?: string | null;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  categories?: CategoryUpdateManyWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CountryUpdateOneRequiredWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  country?: CountryUpdateOneRequiredWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CompanyUpdateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateManyWithoutPlatformInput | null;
}
