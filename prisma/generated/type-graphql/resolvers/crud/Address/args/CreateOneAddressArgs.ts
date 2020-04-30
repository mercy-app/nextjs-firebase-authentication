import * as TypeGraphQL from "type-graphql";
import { AddressCreateInput } from "../../../inputs/AddressCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAddressArgs {
  @TypeGraphQL.Field(_type => AddressCreateInput, { nullable: false })
  data!: AddressCreateInput;
}
