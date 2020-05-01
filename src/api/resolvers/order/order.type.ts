import { Field, ID, Int, ObjectType, Float } from 'type-graphql';
import OrderProduct from './orderProduct.type';

@ObjectType()
export default class Order {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  customer_id: string;

  @Field(type => Float)
  amount: number;

  @Field()
  payment_method: string;

  @Field()
  contact_number: string;

  @Field()
  delivery_address: string;

  @Field()
  status: string;

  @Field(type => [OrderProduct])
  products: OrderProduct[];

  @Field({ nullable: true })
  description?: string;

  @Field(type => Int, { nullable: true })
  discount: number;

  @Field(type => Int)
  delivery_fee: number;

  @Field()
  creation_date: Date;

  @Field()
  userId: number;


  @Field(type => String)
  deliveryTime: string;

  @Field(type => String)
  subtotal: number;

  @Field(type => String)
  deliveryFee: number;

  @Field(type => String)
  deliveryAddress: string;

  @Field(type => String)
  date: string;
}
