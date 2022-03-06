import styled from "styled-components";

const NavHorizontal = styled.nav`
  display: flex;
  grid-gap: 28px;
  align-items: center;
`

const NavVertical = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 18px 0;
`

const NavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 4px 4px 4px;
  grid-gap: 16px;
`

export {NavHorizontal, NavVertical, NavFooter}