import * as TypeGraphQL from "type-graphql";
import { CreateOneCouponArgs } from "./args/CreateOneCouponArgs";
import { DeleteManyCouponArgs } from "./args/DeleteManyCouponArgs";
import { DeleteOneCouponArgs } from "./args/DeleteOneCouponArgs";
import { FindManyCouponArgs } from "./args/FindManyCouponArgs";
import { FindOneCouponArgs } from "./args/FindOneCouponArgs";
import { UpdateManyCouponArgs } from "./args/UpdateManyCouponArgs";
import { UpdateOneCouponArgs } from "./args/UpdateOneCouponArgs";
import { UpsertOneCouponArgs } from "./args/UpsertOneCouponArgs";
import { Coupon } from "../../../models/Coupon";
import { AggregateCoupon } from "../../outputs/AggregateCoupon";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Coupon)
export class CouponCrudResolver {
  @TypeGraphQL.Query(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async coupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Coupon], {
    nullable: false,
    description: undefined
  })
  async coupons(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCouponArgs): Promise<Coupon[]> {
    return ctx.prisma.coupon.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: false,
    description: undefined
  })
  async createOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCouponArgs): Promise<Coupon> {
    return ctx.prisma.coupon.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async deleteOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: true,
    description: undefined
  })
  async updateOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCouponArgs): Promise<Coupon | null> {
    return ctx.prisma.coupon.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCouponArgs): Promise<BatchPayload> {
    return ctx.prisma.coupon.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCouponArgs): Promise<BatchPayload> {
    return ctx.prisma.coupon.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Coupon, {
    nullable: false,
    description: undefined
  })
  async upsertOneCoupon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCouponArgs): Promise<Coupon> {
    return ctx.prisma.coupon.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCoupon, {
    nullable: false,
    description: undefined
  })
  async aggregateCoupon(): Promise<AggregateCoupon> {
    return new AggregateCoupon();
  }
}
