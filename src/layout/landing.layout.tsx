import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import Header, { HeaderWrap } from '../components/styles/header';
import { LogoString } from '../components/styles/heading/h3';
import Container from '../components/styles/paper/container';
import { NavHorizontal } from '../components/styles/links/nav';
import { NavLink, ButtonLink } from '../components/styles/links/link';

interface LayoutProps {
    children?: any;
}

const LandingLayout: FC<LayoutProps> = ({children}) => {
    return (
        <Fragment>
            <Header>
                <Container>
                    <HeaderWrap>
                        <LogoString>
                            <Link href='/'>
                                <a>SOFTNET.LLC</a>
                            </Link>
                        </LogoString>
                        <NavHorizontal>
                            <Link href={`/method`} passHref>
                                <NavLink>
                                    Method
                                </NavLink>
                            </Link>
                        </NavHorizontal>
                    </HeaderWrap>
                </Container>
            </Header>
            {children}
        </Fragment>
    );
};

export default LandingLayout;