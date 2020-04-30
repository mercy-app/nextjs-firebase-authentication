import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutOrderInput } from "../inputs/CompanyCreateOneWithoutOrderInput";
import { OrderItemCreateManyWithoutOrderInput } from "../inputs/OrderItemCreateManyWithoutOrderInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false,
    description: undefined
  })
  status!: keyof typeof Status;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  deliveryTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  paymentMethod!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  deliveryAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  contactNumber!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  subtotal!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  discount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  deliveryFee!: number;

  @TypeGraphQL.Field(_type => OrderItemCreateManyWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  products?: OrderItemCreateManyWithoutOrderInput | null;

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutOrderInput, {
    nullable: false,
    description: undefined
  })
  company!: CompanyCreateOneWithoutOrderInput;
}
