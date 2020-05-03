import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import Toolbar from '@tripApp/components/UI/Toolbar/Toolbar';
import CategorySearch from '@tripApp/container/Listing/Search/CategorySearch/CategorySearch';
import Checkbox from '@tripApp/components/UI/Antd/Checkbox/Checkbox';
import SectionGrid from '@tripApp/components/SectionGrid/SectionGrid';
import { PostPlaceholder } from '@tripApp/components/UI/ContentLoader/ContentLoader';
import ListingMap from '@tripApp/container/Listing/ListingMap';
import { SearchContext } from '@tripApp/context/SearchProvider';
import GetAPIData, {
  Paginator,
  SearchedData,
  SearchStateKeyCheck,
  ProcessAPIData,
} from '@tripApp/library/helpers/get_api_data';
import { getDeviceType } from '@tripApp/library/helpers/get_devide_type';
import { SINGLE_POST_PAGE } from '@tripApp/settings/constant';
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_WITH_MAP,
} from '@tripApp/settings/config';
import ListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from '@tripApp/container/Listing/Listing.style';

const FilterDrawer = dynamic(() =>
  import('@tripApp/container/Listing/Search/MobileSearchView')
);

export default function ListingPage({ processedData, deviceType }) {
  const { state, dispatch } = useContext(SearchContext);
  const statekey = SearchStateKeyCheck(state);

  // states
  const [posts, setPosts] = useState(
    processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []
  );
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (statekey === true) {
      const newData = SearchedData(processedData);
      setPosts(newData);
    } else {
      setPosts(processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []);
    }
  }, [statekey]);

  const handleMapToggle = () => {
    setShowMap((showMap) => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Paginator(
        posts,
        processedData,
        LISTING_PAGE_POST_LIMIT
      );
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;
  if (showMap) {
    columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITH_MAP;
  }

  let columnCount = 'col-24';
  if (deviceType === 'desktop' && showMap === true) {
    columnCount = 'col-12';
  }

  return (
    <ListingWrapper>
      <Head>
        <title>Listing | A react next listing template</title>
      </Head>

      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            deviceType === 'desktop' ? (
              <CategorySearch />
            ) : (
              <FilterDrawer />
            )
          }
          right={
            <ShowMapCheckbox>
              <Checkbox
                defaultChecked={false}
                onChange={handleMapToggle}
              >
                Show map
              </Checkbox>
            </ShowMapCheckbox>
          }
        />
      </Sticky>

      <PostsWrapper className={columnCount}>
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          deviceType={deviceType}
          data={posts}
          totalItem={processedData.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper>
      {showMap && <ListingMap loading={loading} mapData={posts} />}
    </ListingWrapper>
  );
}
