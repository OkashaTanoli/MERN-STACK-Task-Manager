const fetchTaskData = (dispatch) => {
    return fetch('http://localhost:5000/api/v1/tasks')
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: "TASK", payload: data })
        })
        .catch((err) => {
            console.log(`error ${err}`)
        })
}

const fetchSingleTask = (id) => {
    return fetch(`http://localhost:5000/api/v1/tasks/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw Error("task not found")
            }
            return response.json()
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(`${err.message}`)
        })
}

const updateTask = (id,updatedData) => {
    return fetch(`http://localhost:5000/api/v1/tasks/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: updatedData })
    })
    console.log(id)
}

const postTaskData = (data, dispatch) => {
    return fetch('http://localhost:5000/api/v1/tasks', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: data })
    })
        .then(() => {
            fetchTaskData(dispatch)
        })
        .catch(() => {
            console.log("error")
        })
}

const deleteTask = (id, dispatch) => {
    fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            fetchTaskData(dispatch)
        })
}

export {
    fetchTaskData,
    fetchSingleTask,
    postTaskData,
    deleteTask,
    updateTask
}