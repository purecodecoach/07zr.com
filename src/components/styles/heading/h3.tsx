import styled from "styled-components";

interface Props {
    theme: any;
}

const H3 = styled.h3`
  
`

export const LogoString = styled.h3<Props>`
  font-size: 26px;
  a {
    font-weight: 700;
    text-decoration: none;
    color: ${props => props.theme.colors.logoColor};
  }
`
export default H3
