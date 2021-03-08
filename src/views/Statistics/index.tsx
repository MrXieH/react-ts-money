import Layout from '../../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from "../Money/CategorySection";
import styled from "styled-components";
import {RecordList, useRecord} from "../../hooks/useRecords";
import dayjs from "dayjs";

const CategoryWrapper = styled.div`
  background: #fff;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #fff;
  >.notes {
    margin-right: auto;
    margin-left: 16px;
    color: #666;
  }
`

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Index() {
  const [category, setCategory] = useState<Category>('-')
  const { getRecords } = useRecord()
  const hash: { [key: string]: RecordList } = {}
  const selectedRecords = getRecords().filter(r => r.category === category)

  selectedRecords.forEach(item => {
    const key = dayjs(item.createAt).format('YYYY年MM月DD日')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(item)
  })

  const result = Object.entries(hash).sort((a, b) => {
    if (a[0] > b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0
  })

  const change = (e: Partial<RecordItem>) => {
    if (e.category) {
      setCategory(e.category)
    }
  }
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} change={change} />
      </CategoryWrapper>
      {
        result.map(([date, list]) => {
          return (
            <div>
              <Header>{ date }</Header>
              <div>
                {
                  list.map(item => {
                    return (
                      <Item key={item.id}>
                        <div className="tags">{item.tag.name}</div>
                        { item.notes && <div className="notes">{ item.notes }</div> }
                        <div className="amount">{ item.amount }</div>
                      </Item>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </Layout>
  );
}

export default Index;
