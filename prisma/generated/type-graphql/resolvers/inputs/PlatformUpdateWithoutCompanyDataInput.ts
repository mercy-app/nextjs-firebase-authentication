import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateManyWithoutPlatformInput } from "../inputs/CategoryUpdateManyWithoutPlatformInput";
import { CountryUpdateOneRequiredWithoutPlatformInput } from "../inputs/CountryUpdateOneRequiredWithoutPlatformInput";
import { ProductUpdateManyWithoutPlatformInput } from "../inputs/ProductUpdateManyWithoutPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PlatformUpdateWithoutCompanyDataInput {
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

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutPlatformInput, {
    nullable: true,
    description: undefined
  })
  products?: ProductUpdateManyWithoutPlatformInput | null;

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
}
