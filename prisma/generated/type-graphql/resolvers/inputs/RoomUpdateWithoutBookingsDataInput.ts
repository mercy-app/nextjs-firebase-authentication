import * as TypeGraphQL from "type-graphql";
import { ProductUpdateOneRequiredWithoutRoomInput } from "../inputs/ProductUpdateOneRequiredWithoutRoomInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateWithoutBookingsDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  capacity?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutRoomInput, {
    nullable: true,
    description: undefined
  })
  product?: ProductUpdateOneRequiredWithoutRoomInput | null;
}
