import styled from 'styled-components';
import React, {ChangeEvent, useState} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
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
  }
`;

type Props = {
  value: string;
  change: (e: Partial<RecordItem>) => void;
}

const NotesSection: React.FC<Props> = (props) => {
  const [note] = useState<string>(props.value)
  const changeNote = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    props.change({ notes: target.value })
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          defaultValue={note}
          onChange={changeNote}
        />
      </label>
    </Wrapper>
  )
}

export {NotesSection}
