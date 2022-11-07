import React, {useState}  from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


import config from "../../config/config";


export const DateAndTimePicker = ({dateAndTime, changeTweetTimeAtindex, index}) => {
    const [displayValue, setDisplayValue] = useState(dateAndTime);

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker InputProps={{style: {height: '5vh'}}} inputProps={{ readOnly: true }}
                                    renderInput={(params) => <TextField className='date-picker-text-field' {...params} sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: config.colors["secondaryGray"],
                                                },
                                            
                                                '&.Mui-focused fieldset': {
                                                    border: `1px solid ${config.colors["primaryBlue"]}`
                                                },
                                            }
                                        }}/>}
                                        value={displayValue}
                                        onChange={(newDateAndTime) => {
                                            changeTweetTimeAtindex(index, newDateAndTime);
                                            setDisplayValue(newDateAndTime);
                                        }}
                                    />
                            </LocalizationProvider>
  )
}
