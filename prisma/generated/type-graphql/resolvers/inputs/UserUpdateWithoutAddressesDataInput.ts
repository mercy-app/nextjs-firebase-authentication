import * as TypeGraphQL from "type-graphql";
import { CardUpdateManyWithoutUserInput } from "../inputs/CardUpdateManyWithoutUserInput";
import { CompanyUpdateManyWithoutOwnerInput } from "../inputs/CompanyUpdateManyWithoutOwnerInput";
import { ContactUpdateManyWithoutUserInput } from "../inputs/ContactUpdateManyWithoutUserInput";
import { CustomerUpdateManyWithoutUserInput } from "../inputs/CustomerUpdateManyWithoutUserInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { StaffUpdateManyWithoutUserInput } from "../inputs/StaffUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateWithoutAddressesDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostUpdateManyWithoutAuthorInput | null;

  @TypeGraphQL.Field(_type => CompanyUpdateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  companies?: CompanyUpdateManyWithoutOwnerInput | null;

  @TypeGraphQL.Field(_type => CardUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  cards?: CardUpdateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => ContactUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  contacts?: ContactUpdateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => StaffUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  staff?: StaffUpdateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  customer?: CustomerUpdateManyWithoutUserInput | null;
}
