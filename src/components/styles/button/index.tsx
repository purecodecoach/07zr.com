import styled from "styled-components";

interface ButtonProps {
    st: 'success' | 'primary' | 'warning' | 'danger' | 'info' | 'secondary';

}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-gap: 14px;
  padding: 0 16px;
  height: 48px;
  min-width: 150px;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  background: ${props => props.theme.button[props.st].bg};
  border: ${props => props.theme.button[props.st].border};
  color: ${props => props.theme.button[props.st].color};
  cursor: pointer;
`

export default Button