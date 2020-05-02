import { InputType, Field, ID } from 'type-graphql';
import { Company } from '@prismaTypes/models/Company'
@InputType({ description: 'New Category Data' })
export default class AddCompanyInput implements Partial<Company> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  addressId: string;

  @Field()
  contactId: string;

  @Field()
  platformId: string;

  @Field()
  token: string;
}
