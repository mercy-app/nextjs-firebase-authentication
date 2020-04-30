import * as TypeGraphQL from "type-graphql";
import { BookingUpdateManyMutationInput } from "../../../inputs/BookingUpdateManyMutationInput";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookingArgs {
  @TypeGraphQL.Field(_type => BookingUpdateManyMutationInput, { nullable: false })
  data!: BookingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookingWhereInput, { nullable: true })
  where?: BookingWhereInput | null;
}
