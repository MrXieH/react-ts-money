import React from "react";
import styled from "styled-components";

const Label = styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  // children 是 react函数组件的children
  const { label, children, ...reset } = props
  return (
    <Label>
      <span>备注</span>
      <input {...reset}/>
    </Label>
  )
}
export default Input;
