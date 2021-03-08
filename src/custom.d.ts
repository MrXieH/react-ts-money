type Category = '+' | '-'

type Tag = {
  id: string;
  name: string;
}

type RecordItemParams = {
  id: string;
  tagId: string;
  notes: string;
  category: Category;
  amount: string;
  createAt: string;
}

type RecordItem = Omit<RecordItemParams, 'createAt' | 'id'>
