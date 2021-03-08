import React from 'react';
import {useTags} from '../../api/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from "../../components/Layout";
import styled from "styled-components";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Space from "../../components/Space";
import Center from "../../components/Center";

type Params = {
  id: string
}

const TopBar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = (props) => {
  const {findTag, updateTag, deleteTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(id);

  const tagContent = (tag: Tag) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, e.target.value);
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>删除标签</Button>
      </Center>
    </div>
  )

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
    <Layout>
      <TopBar>
        <Icon name="tag" onClick={goBack}/>
        <span>编辑标签</span>
        <Icon name=""/>
      </TopBar>
      { tag ? tagContent(tag) : (
        <div>
          <Space />
          <Space />
          <Space />
          <Center>标签不存在</Center>
        </div>
      ) }
    </Layout>
  );
};

export default Tag;
