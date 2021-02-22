import styled from 'styled-components';
import React, {useState} from "react";

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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食物', '住', '行'])

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const addTag = (): void => {
    const tagName = window.prompt('请输入新标签的名称')
    if (tagName !== null) {
      if (tags.indexOf(tagName) >= 0) {
        alert('标签名已存在')
        return
      }
      setTags([...tags, tagName])

    }
  }

  const toggleTags = (tag: string): void => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const getActiveClass = (tag: string): string => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  }

  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag => {
            return <li key={tag} className={getActiveClass(tag)} onClick={() => toggleTags(tag)}>{tag}</li>
          })
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};
