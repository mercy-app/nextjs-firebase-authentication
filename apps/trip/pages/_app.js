import App from 'next/app';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ThemeProvider } from 'styled-components';
import theme from '@tripApp/themes/default.theme';
import GlobalStyles from '@tripApp/assets/style/Global.style';
import Layout from '@tripApp/container/Layout/Layout';
import AuthProvider from '@tripApp/context/AuthProvider';
import { SearchProvider } from '@tripApp/context/SearchProvider';
import { withData } from '@tripApp/library/helpers/restriction';

export default class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { query, pathname } = ctx;

    const { user, isLoggedIn } = withData(ctx);
    return { pageProps, query, pathname, user, isLoggedIn };
  }

  render() {
    const {
      Component,
      pageProps,
      query,
      user,
      isLoggedIn,
    } = this.props;

    return (
      <AuthProvider>
        <SearchProvider query={query}>
          <Layout user={user} isLoggedIn={isLoggedIn}>
            <ThemeProvider theme={theme}>
              <>
                <GlobalStyles />
                <Component isLoggedIn={isLoggedIn} {...pageProps} />
              </>
            </ThemeProvider>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    );
  }
}
