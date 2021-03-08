import {useEffect, useState} from 'react';
import {createId} from "../lib/createId";
import {useUpdate} from "../hooks/useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags)
  }, [])

  useUpdate(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

  const searchTags = (name: string) => tags.filter(item => item.name === name)

  const findTag = (id: string) => tags.filter(tag => tag.id === id)[0];

  const updateTag = (id: string, name: string) => {
    if (!name.trim()) {
      alert('标签名不能为空')
      return
    }

    if (searchTags(name).length > 0) {
      alert('标签名已存在')
      return
    }

    setTags(tags.map(tag => tag.id === id ? { id, name } : tag))
  }

  const deleteTag = (id: string) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag = () => {
    const tagName = window.prompt('请输入标签名')
    if (tagName) {
      console.log(tagName);
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }

  return {tags, addTag, setTags, findTag, updateTag, searchTags, deleteTag};
};

export {useTags};
