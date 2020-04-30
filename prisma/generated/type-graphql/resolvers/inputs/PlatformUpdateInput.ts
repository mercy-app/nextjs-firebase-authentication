import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutPlatformInput } from "../inputs/CategoryUpdateOneRequiredWithoutPlatformInput";
import { CompanyUpdateManyWithoutPlatformInput } from "../inputs/CompanyUpdateManyWithoutPlatformInput";
import { CountryUpdateOneRequiredWithoutPlatformInput } from "../inputs/CountryUpdateOneRequiredWithoutPlatformInput";
import { ProductUpdateManyWithoutPlatformInput } from "../inputs/ProductUpdateManyWithoutPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateInput {
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
  type?: string | null;

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

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  products?: ProductUpdateManyWithoutPlatformInput | null;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  category?: CategoryUpdateOneRequiredWithoutPlatformInput | null;

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
