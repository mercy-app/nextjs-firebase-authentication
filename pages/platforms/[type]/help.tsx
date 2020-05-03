import Help from '@screens/Help';

// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import '@shopApp/components/MultiCarousel/MultiCarousel.style.css';
import '@redq/reuse-modal/lib/index.css';

import { AuthProvider } from '@shopApp/contexts/auth/auth.provider';
import { StickyProvider } from '@shopApp/contexts/app/app.provider';
import { SearchProvider } from '@shopApp/contexts/search/search.provider';
import { HeaderProvider } from '@shopApp/contexts/header/header.provider';
import { CartProvider } from '@shopApp/contexts/cart/use-cart';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@shopApp/theme';
import { GlobalStyle } from '@shopApp/styled/global.style';
import AppLayout from '@shopApp/containers/LayoutContainer/AppLayout';

const Wrapper = ({ query, deviceType }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <SearchProvider query={query}>
          <HeaderProvider>
            <StickyProvider>
              <AuthProvider>
                <>
                  <AppLayout deviceType={deviceType}>
                    <Help />
                  </AppLayout>
                </>
              </AuthProvider>
            </StickyProvider>
          </HeaderProvider>
        </SearchProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default Wrapper;
