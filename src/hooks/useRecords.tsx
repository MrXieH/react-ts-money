import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";
import { useTags } from "./useTags";

export type RecordList = (RecordItemParams & {
  tag: Tag
})[]

const useRecord = () => {
  const [records, setRecords] = useState<RecordItemParams[]>([])
  const { findTag } = useTags()

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('records') || '[]'))
  }, [])

  useUpdate(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, records)

  const addRecord = (record: RecordItem) => {
    const data: RecordItemParams = {
      ...record,
      id: createId(),
      createAt: new Date().toISOString()
    }
    setRecords([...records, data])
  }

  const getRecords = (): RecordList => {
    return records.map(item => {
      return {
        ...item,
        tag: findTag(item.tagId)
      }
    })
  }

  return {records, addRecord, getRecords}
}

export { useRecord }
