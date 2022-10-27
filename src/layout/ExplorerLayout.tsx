import React from 'react'
import ExplorerContainer from '../components/Container/ExplorerContainer'
import AddressLayout from './AddressLayout'
import TransactionsLayout from './TransactionsLayout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import styled from 'styled-components'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

const StyledTabs = styled(Tabs)`
  & > div {
    display: flex;
    justify-content: center;
  }
`

const StyledTab = styled(Tab)`
  border-color: #fff !important;
  color: #fff !important;
`

const a11yProps = (index: number) => {
  return {
    id: `layout-tab-${index}`,
    'aria-controls': `layout-tabpanel-${index}`,
  }
}

const ExplorerLayout = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <ExplorerContainer>
      <Box sx={{ width: '100%', height: '100%' }}>
        <StyledTabs value={value} onChange={handleChange} indicatorColor='secondary'>
          <StyledTab label='Address' {...a11yProps(0)} />
          <StyledTab label='Transaction' {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <AddressLayout />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TransactionsLayout />
        </TabPanel>
      </Box>
    </ExplorerContainer>
  )
}

export default ExplorerLayout
