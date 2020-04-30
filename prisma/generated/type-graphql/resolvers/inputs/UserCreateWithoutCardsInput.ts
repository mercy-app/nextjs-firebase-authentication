import * as TypeGraphQL from "type-graphql";
import { AddressCreateManyWithoutUserInput } from "../inputs/AddressCreateManyWithoutUserInput";
import { CompanyCreateManyWithoutOwnerInput } from "../inputs/CompanyCreateManyWithoutOwnerInput";
import { ContactCreateManyWithoutUserInput } from "../inputs/ContactCreateManyWithoutUserInput";
import { CustomerCreateManyWithoutUserInput } from "../inputs/CustomerCreateManyWithoutUserInput";
import { PostCreateManyWithoutAuthorInput } from "../inputs/PostCreateManyWithoutAuthorInput";
import { StaffCreateManyWithoutUserInput } from "../inputs/StaffCreateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateWithoutCardsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => PostCreateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostCreateManyWithoutAuthorInput | null;

  @TypeGraphQL.Field(_type => CompanyCreateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  companies?: CompanyCreateManyWithoutOwnerInput | null;

  @TypeGraphQL.Field(_type => AddressCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  addresses?: AddressCreateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => ContactCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  contacts?: ContactCreateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => StaffCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  staff?: StaffCreateManyWithoutUserInput | null;

  @TypeGraphQL.Field(_type => CustomerCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  customer?: CustomerCreateManyWithoutUserInput | null;
}
