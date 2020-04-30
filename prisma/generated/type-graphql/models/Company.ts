import * as TypeGraphQL from "type-graphql";
import { Address } from "../models/Address";
import { Contact } from "../models/Contact";
import { Country } from "../models/Country";
import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Platform } from "../models/Platform";
import { Product } from "../models/Product";
import { Staff } from "../models/Staff";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Company {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  description!: string;

  address?: Address;

  contact?: Contact;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  ownerId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  platformId!: string;

  platform?: Platform;

  owner?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  countryId?: string | null;

  country?: Country | null;

  products?: Product[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  customerId?: string | null;

  staffs?: Staff[] | null;

  customers?: Customer[] | null;

  order?: Order[] | null;
}
