import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const Input = ({name,half,handleChange,label,autoFocus,type,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half?6:12}>
        <TextField onChange={handleChange} variant="outlined"
        name={name}
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name==="password"&&{
            endAdornment:(
                <InputAdornment position="end"> 
                    <IconButton onClick={handleShowPassword}>
                    {type ==="password" ?<Visibility/>:<VisibilityOff/>}
                        </IconButton> 
                </InputAdornment>
            )
        }}
        />
    </Grid>
  )
}

export default Input