import Layout from '../../components/Layout';
import React from 'react';
import styled from "styled-components";
import {TagsSection} from "./TagsSection";
import {NotesSection} from "./NotesSection";
import {CategorySection} from "./CategorySection";
import {NumberPadSection} from "./NumberPadSection";

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `

// type RecordItem = {
//   tags: [];
//   notes: string;
//   category: '+' | '-';
//   value: string
// }

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;
