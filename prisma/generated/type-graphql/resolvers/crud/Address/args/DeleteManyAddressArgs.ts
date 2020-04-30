import * as TypeGraphQL from "type-graphql";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, { nullable: true })
  where?: AddressWhereInput | null;
}
