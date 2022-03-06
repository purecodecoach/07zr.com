import styled from "styled-components";

interface Props {
    span: number;
}

const Col = styled.div<Props>`
  width: calc(${props => props.span / 24 * 100}% - 10px);
`

export default Col