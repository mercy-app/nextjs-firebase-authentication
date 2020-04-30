import * as TypeGraphQL from "type-graphql";
import { Category } from "../models/Category";
import { Company } from "../models/Company";
import { Country } from "../models/Country";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Platform {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  link!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  label!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  intlId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  bannerImg!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  typeSlug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  content?: string | null;

  products?: Product[] | null;

  categories?: Category[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  platformType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  countryId!: string;

  country?: Country;

  company?: Company[] | null;
}
