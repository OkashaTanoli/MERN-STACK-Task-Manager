import React, { useContext, useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { postTaskData } from './fetchdata';
import { Context } from './store/context';


function Input() {
    const { state, dispatch } = useContext(Context)
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const postData = async () => {
        setLoading(true)
        await postTaskData(data,dispatch)
        setData('')
        setLoading(false)
    }
    return (
        <div className="Input">
            <Box
                sx={{
                    width: 500,
                    maxWidth: '80%',
                }}
            >
                <TextField value={data} fullWidth label="Enter Name" id="fullWidth" onChange={(e) => { setData(e.target.value) }} />
            </Box>
            {
                !loading ?
                    <Button disabled={data === ''} className='btn' variant="contained" color="success" onClick={postData}>Add name</Button>
                    :
                    <LoadingButton className='btn' loading loadingIndicator="Loading..." variant="outlined">
                        Submit
                    </LoadingButton>
            }
        </div>
    );
}

export default Input;
