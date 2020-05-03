import Platforms from '@screens/Platforms';
import { SearchProvider } from '@tripApp/context/SearchProvider';
import GetAPIData, {
  Paginator,
  SearchedData,
  SearchStateKeyCheck,
  ProcessAPIData,
} from '@tripApp/library/helpers/get_api_data';
// import { getDeviceType } from '@tripApp/library/helpers/get_devide_type';
import Layout from '@tripApp/container/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import theme from '@tripApp/themes/default.theme';
import GlobalStyles from '@tripApp/assets/style/Global.style';

const PlarformsWrapper = ({ query, processedData, deviceType }) => {
  let device = 'dektop';
  for (let [key, value] of Object.entries(deviceType)) {
    if (value) {
      device = key;
    }
  }

  return (
    <SearchProvider query={query}>
      <Layout>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Platforms
              processedData={processedData}
              deviceType={device}
            />
          </>
        </ThemeProvider>
      </Layout>
    </SearchProvider>
  );
};

PlarformsWrapper.getInitialProps = async ({
  req,
  query,
  deviceType,
}) => {
  // use this query to filter data from your fetch data
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'listingHotel',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  //   const deviceType = getDeviceType(req);
  return { processedData, query };
};

export default PlarformsWrapper;
