import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../components/Header'
import { PieChart } from '../components/PieChart'

export const PortsPage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="40vh">
        <PieChart />
      </Box>
    </Box>
  )
}
