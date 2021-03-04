import Layout from '../../components/Layout';
import React, {useState} from 'react';
import styled from "styled-components";
import {TagsSection} from "./TagsSection";
import {NotesSection} from "./NotesSection";
import {CategorySection} from "./CategorySection";
import {NumberPadSection} from "./NumberPadSection";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `

function Money() {
  const [record, setRecord] = useState<RecordItem>({
    tag: '',
    notes: '',
    category: '+',
    value: '0'
  })

  const change = (e: Partial<RecordItem>) => {
    setRecord({...record, ...e})
  }
  const save = () => {
    console.log('save')
  }
  return (
    <MyLayout>
      <TagsSection value={record.tag} change={change}/>
      <NotesSection value={record.notes} change={change}/>
      <CategorySection value={record.category} change={change}/>
      <NumberPadSection value={record.value} change={change} ok={save}/>
    </MyLayout>
  );
}

export default Money;
