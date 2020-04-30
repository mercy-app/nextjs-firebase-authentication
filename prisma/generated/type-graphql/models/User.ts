import * as TypeGraphQL from "type-graphql";
import { Address } from "../models/Address";
import { Card } from "../models/Card";
import { Company } from "../models/Company";
import { Contact } from "../models/Contact";
import { Customer } from "../models/Customer";
import { Post } from "../models/Post";
import { Staff } from "../models/Staff";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null;

  posts?: Post[] | null;

  companies?: Company[] | null;

  addresses?: Address[] | null;

  cards?: Card[] | null;

  contacts?: Contact[] | null;

  staff?: Staff[] | null;

  customer?: Customer[] | null;
}
