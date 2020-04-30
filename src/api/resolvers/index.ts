import { NonEmptyArray } from 'type-graphql';

import MigrationResolvers from './migration';
import SessionResolver from './session';
import UserResolvers from './user';
import StorefrontResolvers from './storefront';
import PaypalResolvers from './paypal';
import StripeResolvers from './stripe';
import CourseResolvers from './course';
import BookResolvers from './book';
import UpgradeResolvers from './upgrade';
import CouponResolver from './coupon';
import PartnerResolver from './partner';
import CommunityResolvers from './community';
import TempCounponResolver from './coupon/temp';
import ProductResolver from './product';
import CategoryResolver from './category'
import OrderResolver from './order'
import StaffResolver from './staff'
import CustomerResolver from './customer'

export default [
  MigrationResolvers,
  SessionResolver,
  UserResolvers,
  StorefrontResolvers,
  PaypalResolvers,
  StripeResolvers,
  CourseResolvers,
  BookResolvers,
  UpgradeResolvers,
  CouponResolver,
  PartnerResolver,
  CommunityResolvers,
  TempCounponResolver,
  ProductResolver,
  CategoryResolver,
  OrderResolver,
  StaffResolver,
  CustomerResolver
] as NonEmptyArray<Function>;
