import * as TypeGraphQL from "type-graphql";
import { Company } from "../models/Company";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Customer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  companyId!: string;

  company?: Company;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  totalOrder!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  totalOrderAmount!: number;
}
