type Tag = {
  id: string;
  name: string;
}

type RecordItemParams = {
  id: string;
  tagId: string;
  notes: string;
  category: '+' | '-';
  value: string;
  createAt: string;
}

type RecordItem = Omit<RecordItemParams, 'createAt' | 'id'>
