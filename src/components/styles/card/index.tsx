import styled from "styled-components";

interface Props {
    theme: any;
    static?: boolean;
    rounded?: boolean;
}

const Card = styled.div<Props>`
  padding: ${props => props.static ? '24px 20px 32px' : '12px 12px 18px'};
  border: ${props => props.theme.borders.thin};
  min-width: ${props => props.static ? '450px': '100%'};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.rounded ? props.theme.radius.normal : 0};

  &>a>img {
    margin-top: -13px;
    margin-left: -13px;
    margin-right: -13px;
    max-width: calc(100% + 26px);
    width: calc(100% + 26px);
    height: 300px;
    object-fit: cover;
  }
`

export default Card