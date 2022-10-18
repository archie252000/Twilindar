import React, { Fragment } from 'react'
import Box from "@mui/material/Box"

export const TabPanel = ({ children, value, index}) => {
  return (
    <div
      role="tabpanel"
      style={{display: (value !== index)?"none":"block"}}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (<Box>{children}</Box>)}
    </div>
  )
}
