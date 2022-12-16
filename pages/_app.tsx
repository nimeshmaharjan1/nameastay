import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider, theme } from 'antd'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#00b96b',
        },
        algorithm: theme.darkAlgorithm
      }}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider></Provider>
  )
}
