import 'assets/styles/global.css';

import { FC, useEffect } from 'react';

import { APP_CONFIG } from '@lib/constants';
import { AppProps } from 'next/app';
import { AppThunkDispatch } from '@lib/state/types';
import { AuthThunks } from '@lib/state/thunks';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import container from '@lib/container';
// import { persistStore } from 'redux-persist';
import { useRouter } from 'next/router';
import { useStore } from '@lib/state/store';
// import TagManager from 'react-gtm-module';
import Head from 'components/SEO/Head';

// const tagManagerArgs = {
//     gtmId: 'GTM-5T3H9B6',
// };

// if (typeof window !== 'undefined') {
//     TagManager.initialize(tagManagerArgs);
// }

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);
    // const persistor = persistStore(store);
    const router = useRouter();

    // client unauthorized event handler
    useEffect(() => {
        // dispatch logout action when api return unauthorized
        // and redirect to auth route
        const listener = container.cradle.httpService.unauthorizedEvent.on(
            async () => {
                await (store.dispatch as AppThunkDispatch)(
                    AuthThunks.userLogOut(),
                );

                router.push(APP_CONFIG.privateRedirectRoute);
            },
        );

        return (): void => {
            // clear listener
            listener.dispose();
        };
    }, [router, store]);
    const { title, description, image } = pageProps;
    return (
        <>
            <Head title={title} description={description} image={image} />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
    // return (
    //     <>
    //         <Provider store={store}>
    //             <PersistGate
    //                 loading={<div>Loading...</div>}
    //                 persistor={persistor}
    //             >
    //                 <Component {...pageProps} />
    //             </PersistGate>
    //         </Provider>
    //     </>
    // );
};

export default App;
