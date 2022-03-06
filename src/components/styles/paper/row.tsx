import styled from "styled-components";

interface Props {
    justify?: string;
    align?: string;
}

const Row = styled.div<Props>`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items: ${props => props.align ? props.align : 'flex-start'};
`

export default Row