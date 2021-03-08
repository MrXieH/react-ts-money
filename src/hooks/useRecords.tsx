import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useRecord = () => {
  const [records, setRecords] = useState<RecordItemParams[]>([])

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('record') || '[]'))
  }, [])

  useUpdate(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = (record: RecordItem) => {
    const data: RecordItemParams = {
      ...record,
      id: createId(),
      createAt: new Date().toISOString()
    }
    setRecords([...records, data])
  }

  return {records, addRecord}
}

export { useRecord }
