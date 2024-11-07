import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [branch, setBranch] = React.useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <div style= {styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}> 
                <TextField 
                required
                id="name" 
                label="Name" 
                variant="outlined"
                type= 'text' 
                placeholder='Enter your name' 
                value= {fullName} 
                onChange={(event) =>{setFullName(event.target.value);}}
                style={styles.input}

                />

                <TextField  
                required
                id="email" 
                label="Email" 
                variant="outlined"
                type="email"
                placeholder="Enter you email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={styles.input}

                />

                <TextField  
                required
                id="password" 
                label="Password" 
                variant="outlined"
                placeholder='Enter your password' 
                type= 'password' 
                value= {password} 
                onChange={(event) =>{setPassword(event.target.value);}}
                style={styles.input}

                />

                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="branch-input">Branch</InputLabel>
                    <Select
                      labelId="branch-label"
                      id="branch"
                      value={branch}
                      label="Branch *"
                      onChange={(event) =>{setBranch(event.target.value);}}
                      >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="CSAM">CSAM</MenuItem>
                      <MenuItem value="CSAI">CSAI</MenuItem>
                      <MenuItem value="CSB">CSB</MenuItem>
                      <MenuItem value="CSD">CSD</MenuItem>
                      <MenuItem value="CSE">CSE</MenuItem>
                      <MenuItem value="CSSS">CSSS</MenuItem>
                      <MenuItem value="ECE">ECE</MenuItem>
                      <MenuItem value="EVE">EVE</MenuItem>

                    </Select>
                </FormControl>

                <Button variant="contained" style={styles.button} type='submit'>Register</Button>
            </form>
        </div>
    )
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: 'green',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      fontSize: '14px',
    }
  };