import styled from "styled-components";

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000000;
`

export const ButtonLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000000;
  border: 1px solid #000000;
  padding: 14px 24px;
  display: inline-flex;
`

export const VerticalLink = styled.a`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;
  
  :first-child {
    border-top: 1px solid #eeeeee;
  }
  :hover, :focus {
    background-color: #eeeeee;
  }
  
  &.active {
    background-color: #f0f0f0;
  }
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  :hover {
    font-weight: 500;
  }
`

