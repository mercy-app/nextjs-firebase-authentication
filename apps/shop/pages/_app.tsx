import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@shopApp/theme';
import { AuthProvider } from '@shopApp/contexts/auth/auth.provider';
import { StickyProvider } from '@shopApp/contexts/app/app.provider';
import { SearchProvider } from '@shopApp/contexts/search/search.provider';
import { HeaderProvider } from '@shopApp/contexts/header/header.provider';
import { LanguageProvider } from '@shopApp/contexts/language/language.provider';

import AppLayout from '@shopApp/containers/LayoutContainer/AppLayout';
import { useDeviceType } from '@shopApp/helper/useDeviceType';
import { CartProvider } from '@shopApp/contexts/cart/use-cart';
// Language translation files
import localEn from '@shopApp/data/translation/en.json';
import localAr from '@shopApp/data/translation/ar.json';
import localEs from '@shopApp/data/translation/es.json';
import localDe from '@shopApp/data/translation/de.json';
import localCn from '@shopApp/data/translation/zh.json';
import localIl from '@shopApp/data/translation/he.json';

// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/MultiCarousel/MultiCarousel.style.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from '@shopApp/styled/global.style';
import { parseCookies } from '@shopApp/helper/parse-cookies';

// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
// need to provide types
export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
  locale,
  query,
}) {
  const deviceType = useDeviceType(userAgent);
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <SearchProvider query={query}>
            <HeaderProvider>
              <StickyProvider>
                <AuthProvider>
                  <>
                    <AppLayout deviceType={deviceType}>
                      <Component
                        {...pageProps}
                        deviceType={deviceType}
                      />
                    </AppLayout>
                    <GlobalStyle />
                  </>
                </AuthProvider>
              </StickyProvider>
            </HeaderProvider>
          </SearchProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req
    ? req.headers['user-agent']
    : navigator.userAgent;
  const { locale } = parseCookies(req);
  return { ...appProps, userAgent, query, locale };
};
