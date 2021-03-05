import styled from 'styled-components';
import React from "react";

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Category = '+' | '-'
type CategoryList = {
  name: string;
  value: Category;
}[]
const categoryList: CategoryList = [
  { name: '收入', value: '+' },
  { name: '支出', value: '-' }
]

type Props = {
  value: '+' | '-';
  change: (e: Partial<RecordItem>) => void;
}

const CategorySection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(item => {
            return (
              <li
                key={item.value}
                className={ item.value === props.value ? 'selected' : '' }
                onClick={() => props.change({ category: item.value })}>
                { item.name }
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}

export {CategorySection}
