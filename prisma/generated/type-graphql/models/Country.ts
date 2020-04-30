import * as TypeGraphQL from "type-graphql";
import { Company } from "../models/Company";
import { Platform } from "../models/Platform";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Country {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  code!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  currency!: string;

  company?: Company[] | null;

  platform?: Platform[] | null;
}
