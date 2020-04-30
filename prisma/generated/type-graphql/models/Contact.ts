import * as TypeGraphQL from "type-graphql";
import { Company } from "../models/Company";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Contact {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  number!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  companyId?: string | null;

  company?: Company | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  userId?: string | null;

  user?: User | null;
}
