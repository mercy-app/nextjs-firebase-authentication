import Head from 'next/head';
import Link from 'next/link';
import Container from '@tripApp/components/UI/Container/Container';
import Heading from '@tripApp/components/UI/Heading/Heading';
import SectionTitle from '@tripApp/components/SectionTitle/SectionTitle';
import SearchArea from '@tripApp/container/Home/Search/Search';
import LocationGrid from '@tripApp/container/Home/Location/Location';
import SectionGrid from '@tripApp/components/SectionGrid/SectionGrid';
import GetAPIData from '@tripApp/library/helpers/get_api_data';
import { getDeviceType } from '@tripApp/library/helpers/get_devide_type';
import {
  LISTING_POSTS_PAGE,
  SINGLE_POST_PAGE,
} from '@tripApp/settings/constant';
import {
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE,
  HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH,
} from '@tripApp/settings/config';
export default function HomePage({
  deviceType,
  locationData,
  topHotelData,
  luxaryHotelData,
}) {
  let limit;

  if (deviceType === 'mobile') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE;
  }
  if (deviceType === 'tablet') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE;
  }

  if (deviceType === 'desktop') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE;
  }
  return (
    <>
      <Head>
        <title>Hotel | A react next listing template</title>
      </Head>
      <SearchArea />
      <LocationGrid data={locationData} deviceType={deviceType} />
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="Travelers’ Choice: Top hotels" />}
          link={
            <Link href={LISTING_POSTS_PAGE}>
              <a>Show all</a>
            </Link>
          }
        />
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH}
          data={topHotelData.slice(0, limit)}
          limit={limit}
          deviceType={deviceType}
        />
        <SectionTitle
          title={<Heading content="Best Rated: Luxary hotels" />}
          link={
            <Link href={LISTING_POSTS_PAGE}>
              <a>Show all</a>
            </Link>
          }
        />
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH}
          data={luxaryHotelData.slice(0, limit)}
          limit={limit}
          deviceType={deviceType}
        />
      </Container>
    </>
  );
}

HomePage.getInitialProps = async ({ req }) => {
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'luxaryHotelData',
    },
    {
      endpoint: 'top-hotel',
      name: 'topHotelData',
    },
    {
      endpoint: 'location',
      name: 'locationData',
    },
  ];
  const deviceType = getDeviceType(req);
  const pageData = await GetAPIData(apiUrl);
  let locationData = [],
    topHotelData = [],
    luxaryHotelData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      } else if (item.name === 'topHotelData') {
        topHotelData = item.data ? [...item.data] : [];
      } else if (item.name === 'luxaryHotelData') {
        luxaryHotelData = item.data ? [...item.data] : [];
      }
    });
  }
  return { deviceType, locationData, topHotelData, luxaryHotelData };
};
