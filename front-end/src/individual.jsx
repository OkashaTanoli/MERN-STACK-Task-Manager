import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import { fetchSingleTask, updateTask } from './fetchdata';

function Individual(props) {
    //  State
    const [inputData, setInputData] = useState('')
    const [taskAdded, setTaskAdded] = useState(false)
    const [loading, setLoading] = useState(true)
    const [indData, setIndData] = useState({})

    // Getting Query 
    const [searchParams, setSearchParams] = useSearchParams()
    const searchId = searchParams.get('id') || ''

    //UseEffect
    useEffect(async () => {
        const data = await fetchSingleTask(searchId)
        setInputData(data?.name)
        setLoading(false)
        setIndData(data)
    }, [])

    const editTask = async() => {
        await updateTask(indData._id,inputData)
        setTaskAdded(true)
        setTimeout(() => {
            setTaskAdded(false)
        }, 2000);
    }

    if (loading) {
        return (
            <div className='individual'>
                <div className='individual_div'>
                    <p>Loading..........</p>
                </div>
            </div>
        )
    }

    if (!indData) {
        return (
            <div className='individual'>
                <div className='individual_div'>
                    <h1>No data found</h1>
                </div>
            </div>
        )
    }
    return (
        <div className='individual'>
            <div className='individual_div'>
                <h3>ID: {indData._id}</h3>
                <input type="text" name="" className='individual_input' onChange={(e) => { setInputData(e.target.value) }} value={inputData} />
                <button className='individual_button' onClick={editTask}>Update</button>
                <div style={{display:taskAdded?'block':'none',textAlign:'center',fontSize:'20px',color:'green'}}>Task Editted</div>
            </div>
        </div>
    );
}

export default Individual;