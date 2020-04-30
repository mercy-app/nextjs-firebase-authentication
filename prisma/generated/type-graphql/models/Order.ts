import * as TypeGraphQL from "type-graphql";
import { Company } from "../models/Company";
import { OrderItem } from "../models/OrderItem";
import { Status } from "../enums/Status";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Order {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false,
    description: undefined,
  })
  status!: keyof typeof Status;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  amount!: number;

  products?: OrderItem[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  companyId!: string;

  company?: Company;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  deliveryTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  paymentMethod!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  deliveryAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  contactNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  subtotal!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  discount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined,
  })
  deliveryFee!: number;
}
