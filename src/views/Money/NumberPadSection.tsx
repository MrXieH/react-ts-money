import styled from 'styled-components';
import React from "react";

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }
`;

type NumberItem = {
  value: string;
  action?: 'del' | 'clean' | 'ok';
  className?: string;
}

type NumberList = NumberItem[]

const numberList: NumberList = [
  {value: '1'},
  {value: '2'},
  {value: '3'},
  {value: '删除', action: 'del'},
  {value: '4'},
  {value: '5'},
  {value: '6'},
  {value: '清空', action: 'clean'},
  {value: '7'},
  {value: '8'},
  {value: '9'},
  {value: 'ok', action: 'ok', className: 'ok'},
  {value: '0', className: 'zero'},
  {value: '.', className: 'dot'},
]

type Props = {
  value: string;
  change: (e: Partial<RecordItem>) => void;
  ok: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  let output = props.value
  const MaxLength = 16
  const setOutput = (value: string) => {
    if (value.length >= MaxLength) {
      return
    }
    props.change({ value })
  }

  const handlerClick = (data: NumberItem) => {
    const { value, action } = data
    const isDot = output.indexOf('.') > 0
    if (action) {
      if (action === 'del') {
        setOutput(output.length === 1 ? '0' : output.slice(0, -1))
      }
      if (action === 'clean') {
        setOutput('0')
      }
      if (action === 'ok') {
        props.ok()
      }
      return
    }
    if (value === '.' && isDot) {
      return
    }
    if (output === '0') {
      setOutput(value === '.' ? `0${value}` : value)
      return
    }
    setOutput(output + value)
  }

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix">
        {
          numberList.map(item => {
            return (
              <button
                key={item.value}
                className={item.className}
                onClick={() => handlerClick(item)}
              >
                {item.value}
              </button>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export {NumberPadSection};
