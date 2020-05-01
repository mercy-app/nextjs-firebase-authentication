import { ObjectType, Field, Int } from 'type-graphql';
import { Product } from '@prismaTypes/models/Product'
@ObjectType()
export default class ProductsConnection {
  @Field(type => [Product])
  items: Product[];

  @Field(type => Int)
  totalCount: number;

  @Field()
  hasMore: boolean;
}
