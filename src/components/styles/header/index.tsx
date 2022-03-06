import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: 72px;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
  border-bottom: ${props=>props.theme.borders.thin};
`

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export {HeaderWrap}

export default Header