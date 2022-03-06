import styled from "styled-components";

interface Props {
    direction?: string;
    size?: number;
}

const Space = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction};
  grid-gap: ${props => props.size}px;
`

export default Space