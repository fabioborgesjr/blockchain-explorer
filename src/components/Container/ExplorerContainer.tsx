import styled from 'styled-components'

const ExplorerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  overflow: auto;
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export default ExplorerContainer
