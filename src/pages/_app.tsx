import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { wrapper } from '@/redux';

function App({ Component, ...pageProps }: AppProps) {
  // store를 app과 연결 할 때 wrapper.useWrappedStore()를 사용하여 연결해야한다.
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default App;
