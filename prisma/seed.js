const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.platform.deleteMany({});
  await prisma.country.deleteMany({});
  const country1 = await prisma.country.create({
    data: {
      code: 886,
      name: 'Taiwan',
      currency: 'TWD'
    }
  });
  const country2 = await prisma.country.create({
    data: {
      code: 1,
      name: 'United States',
      currency: 'USD'
    }
  });
  const platform1 = await prisma.platform.create({
    data: {
      title: 'night market',
      typeSlug: 'nightmarkettw',
      platformType: 'ECOMMERCE',
      content: 'get your favorite taiwanese food',
      link: '/platforms/nightmarkettw',
      label: 'Night Market US',
      icon: '',
      intlId: '',
      bannerImg:
        'https://www.agoda.com/wp-content/uploads/2019/03/Shilin-Night-Market-Taipei-Shilin-Market.jpg',
      country: {
        connect: {
          code: 886
        }
      },
      categories: {
        create: [
          {
            name: 'appetizer',
            slug: 'appetizer',
            type: 'nightMarket',
            icon: 'food'
          },
          {
            name: 'main course',
            slug: 'maincourse',
            type: 'nightMarket',
            icon: 'bigFood'
          }
        ]
      }
    }
  });
  const platform2 = await prisma.platform.create({
    data: {
      title: 'sports US',
      content: 'find your best sport session or coach',
      typeSlug: 'sportsus',
      platformType: 'BOOKING_HR',
      link: '/platforms/sportsus',
      label: 'Sports US',
      icon: '',
      intlId: '',
      bannerImg: 'https://i.ytimg.com/vi/ENr27Q1hKsw/maxresdefault.jpg',
      country: {
        connect: {
          code: 1
        }
      },
      categories: {
        create: [
          {
            name: 'yoga',
            slug: 'yoga',
            type: 'sportsUS',
            icon: 'yoga'
          },
          {
            name: 'soccer',
            slug: 'soccer',
            type: 'sportsUS',
            icon: 'soccer'
          }
        ]
      }
    }
  });

  const user1 = await prisma.user.create({
    data: {
      id: 'somemongoId',
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: [
          {
            title: 'Join us for Prisma Day 2019 in Berlin',
            content: 'https://www.prisma.io/day/',
            published: true
          },
          {
            title: 'Join us for Prisma Day 2020 in Berlin',
            content: 'https://www.prisma.io/day/',
            published: false
          }
        ]
      }
    }
  });
  const user2 = await prisma.user.create({
    data: {
      id: 'somemongoId2',
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false
          }
        ]
      }
    }
  });

  console.log({ user1, user2, platform1, platform2, country1, country2 });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });
