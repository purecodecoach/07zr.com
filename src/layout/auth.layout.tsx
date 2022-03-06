import React, { FC } from 'react';
import FullPageContainer from "../components/styles/paper/full";
import Card from "../components/styles/card";
import { LogoString } from "../components/styles/heading/h3";
import Link from "next/link";

interface LayoutProps {
    children?: any;
}

const AuthLayout: FC<LayoutProps> = ({children}) => {

    return (
        <FullPageContainer style={{height: '100vh'}}>
            <Card static>
                <LogoString style={{marginBottom: 16, fontSize: 22}}>
                    <Link href='/'>
                        <a>SOFTNET.LLC</a>
                    </Link>
                </LogoString>
                {children}
            </Card>
        </FullPageContainer>
    );
};

export default AuthLayout;