import styled from 'styled-components';
import React from "react";
import {useTags} from "../../hooks/useTags";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       cursor: pointer;
       &.selected {
        background: #f60;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string;
  change: (e: Partial<RecordItem>) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags()
  const selectedTag = props.value


  const addTag = (): void => {
    const tagName = window.prompt('请输入新标签的名称')
    if (tagName !== null) {
      if (tags.filter(item => item.name === tagName).length > 0) {
        alert('标签名已存在')
        return
      }
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }

  const toggleTags = (tagId: string): void => {
    props.change({ tagId: selectedTag === tagId ? '' : tagId })
  }

  const getActiveClass = (tag: string): string => {
    return selectedTag === tag ? 'selected' : ''
  }

  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag => {
            return <li key={tag.id} className={getActiveClass(tag.id)} onClick={() => toggleTags(tag.id)}>{tag.name}</li>
          })
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};
