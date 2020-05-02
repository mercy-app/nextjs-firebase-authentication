import { InputType, Field, ID } from 'type-graphql';
import { Company } from '@prismaTypes/models/Company'
@InputType({ description: 'New Category Data' })
export default class NewCompany {
  @Field(type => String)
  token: string;

  @Field()
  company: Company;
}
