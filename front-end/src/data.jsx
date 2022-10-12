import React, { useContext, useEffect, useState } from 'react';
import './App.css'
import { fetchTaskData, deleteTask } from './fetchdata';
import { Context } from './store/context';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function Data() {

    // const [task, setTask] = useState()
    const [loading, setLoading] = useState(true)
    const { state, dispatch } = useContext(Context)

    useEffect(() => {
        async function fetchData(params) {
            const data = await fetchTaskData(dispatch)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return (
            <div>
                Loading ................
            </div>
        )
    }
    if (state.length < 1) {
        return <h1>No data Aavailable</h1>

    }
    // console.log(state)
    return (
        <div className='data'>
            {
                state.map((val, ind) => {
                    return (
                            <div key={val._id} className='field' >
                                {val.name}
                                <Link to={`/task?id=${val._id}`}>edit</Link>
                                <DeleteIcon onClick={() => deleteTask(val._id, dispatch)} sx={{ color: 'red', cursor: "pointer" }} />
                            </div>
                    )
                })
            }
        </div>
    );
}

export default Data;