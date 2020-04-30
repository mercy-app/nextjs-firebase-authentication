import * as TypeGraphQL from "type-graphql";
import { Company } from "../models/Company";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Staff {
  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  userId!: string;

  company?: Company;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  companyId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  role!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
