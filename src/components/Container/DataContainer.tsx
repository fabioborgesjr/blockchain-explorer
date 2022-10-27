import React from 'react'
import styled from 'styled-components'
import { FieldLabel, FieldValue } from '../Texts/styles'

type Props = {
  schemas: object[]
  data: any
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
  border-color: #fff;
  text-align: left;
  overflow-wrap: break-word;
  width: 80%;
`

const DataContainer: React.FC<Props> = ({ schemas, data }) => {
  return (
    <Wrapper>
      {schemas.map((schema: any, index: number) => (
        <div key={index}>
          <FieldLabel>{schema.label}</FieldLabel>
          <FieldValue>
            {data[schema.id] || data[schema.id] === 0
              ? schema.formatter
                ? schema.formatter(data[schema.id])
                : data[schema.id]
              : 'N/A'}
          </FieldValue>
        </div>
      ))}
    </Wrapper>
  )
}

export default DataContainer
