import React, { Fragment } from 'react'
import Box from "@mui/material/Box"

export const TabPanel = ({ children, value, index}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (<Box>{children}</Box>)}
    </div>
  )
}
