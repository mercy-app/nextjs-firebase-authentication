import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from '@shopApp/components/seo';
import StoreNav from '@shopApp/components/StoreNav/StoreNav';
import Carousel from '@shopApp/components/Carousel/Carousel';
import Banner from '@shopApp/containers/Banner';
import Sidebar from '@shopApp/containers/Sidebar/Sidebar';
import Products from '@shopApp/containers/Products/Products';
import CartPopUp from '@shopApp/containers/Cart/CartPopUp';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from '@shopApp/data/offers';
import { usePlatform } from '@shopApp/contexts/platform/platform.provider';
import { useQuery } from '@apollo/react-hooks';
import { GET_PLATFORM } from '@shopApp/graphql/query/platform.query';
// import BannerImg from 'image/grocery.png';
// import storeType from 'constants/storeType';

// const PAGE_TYPE = 'grocery';

function HomePage({ deviceType }) {
  const { query, asPath } = useRouter();
  const { platforms, selected, setSelected } = usePlatform();
  const targetRef = React.useRef(null);
  const { data, error, loading } = useQuery(GET_PLATFORM, {
    variables: {
      typeSlug: asPath.split('/')[asPath.split('/').length - 1],
    },
    skip: !asPath,
  });

  React.useEffect(() => {
    if (data && data.platform) {
      setSelected(data.platform);
    }
  }, [data]);

  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>page not exist</div>;
  }
  console.log(data, asPath);
  return (
    <>
      <SEO
        title="Grocery - PickBazar"
        description="Grocery Details"
      />
      <Modal>
        <Banner
          title={data?.platform?.title}
          content={data?.platform?.content}
          imageUrl={data?.platform?.bannerImg}
        />

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={platforms} />
              <Sidebar
                type={data?.platform?.typeSlug}
                deviceType={deviceType}
              />
            </MobileCarouselDropdown>
            {/* <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection> */}
            <MainContentArea>
              <SidebarSection>
                <Sidebar
                  type={data?.platform?.typeSlug}
                  deviceType={deviceType}
                />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={data?.platform?.typeSlug}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={platforms} />
            <Sidebar
              type={data?.platform?.typeSlug}
              deviceType={deviceType}
            />
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={data?.platform?.typeSlug}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default HomePage;
