import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneRequiredWithoutOrderInput } from "../inputs/CompanyUpdateOneRequiredWithoutOrderInput";
import { OrderItemUpdateManyWithoutOrderInput } from "../inputs/OrderItemUpdateManyWithoutOrderInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class OrderUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true,
    description: undefined
  })
  status?: keyof typeof Status | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  deliveryTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  paymentMethod?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  deliveryAddress?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  contactNumber?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  subtotal?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  discount?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
    description: undefined
  })
  deliveryFee?: number | null;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  products?: OrderItemUpdateManyWithoutOrderInput | null;

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutOrderInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneRequiredWithoutOrderInput | null;
}
