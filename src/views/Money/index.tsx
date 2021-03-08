import Layout from '../../components/Layout';
import React, {useState} from 'react';
import styled from "styled-components";
import {TagsSection} from "./TagsSection";
import {NotesSection} from "./NotesSection";
import {CategorySection} from "./CategorySection";
import {NumberPadSection} from "./NumberPadSection";
import { useRecord } from "../../hooks/useRecords";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`

const defaultFormData: RecordItem = {
  tagId: '',
  notes: '',
  category: '+',
  amount: '0'
}

const Money: React.FC = () => {
  const [record, setRecord] = useState<RecordItem>(defaultFormData)
  const { addRecord } = useRecord()

  const change = (e: Partial<RecordItem>) => {
    setRecord({...record, ...e})
  }
  const save = () => {
    if (!record.tagId) {
      alert('请选择标签')
      return
    }
    addRecord(record)
    alert('添加成功')
    setRecord(defaultFormData)
  }
  return (
    <MyLayout>
      <TagsSection value={record.tagId} change={change}/>
      <NotesSection value={record.notes} change={change}/>
      <CategoryWrapper>
        <CategorySection value={record.category} change={change}/>
      </CategoryWrapper>
      <NumberPadSection value={record.amount} change={change} ok={save}/>
    </MyLayout>
  );
}

export default Money;
