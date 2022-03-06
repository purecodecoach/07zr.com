import React, { useEffect, useState, ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyles from "../components/global";
import { store } from "../redux/store";
import { CHANGE_SIZE } from "../redux/action.types";
import sizeSettings from "../untils/size.settings";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ConnectedRouter } from "connected-next-router";
import { loadToken } from "../untils/storage.helper";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [mounted, setMounted] = useState(false);
    const theme: any = store.getState().theme || {};
    const auth: any = store.getState().auth || {};

    const changeBrowser = () => {
        let size = {};
        if (window.innerWidth >= 1296) {
            size = sizeSettings.lg;
        } else if (window.innerWidth >= 1024) {
            size = sizeSettings.md;
        } else {
            size = sizeSettings.sm;
        }
        return {
            type: CHANGE_SIZE,
            data: {
                width: window.innerWidth,
                settings: size,
            },
        };
    };

    useEffect(() => {
        setMounted(true);
        changeBrowser();
        return window.addEventListener("resize", changeBrowser);
    }, []);

    return mounted && <Provider store={store}>
        <ConnectedRouter>
            <ThemeProvider theme={{ ...theme.settings, size: theme.size.settings }}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <NextIntlProvider messages={pageProps.messages}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </NextIntlProvider>
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>;
}

export default MyApp;