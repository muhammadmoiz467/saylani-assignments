import { Button, DatePicker, Form, Input, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'

const { Title } = Typography
const { Item } = Form
const { Option } = Select

let initialState = { title: "", dueDate: "", description: "", priority: "" }

const Edit = () => {

      const [state, setState] = useState(initialState)
      const [isProcessing, setIsProcessing] = useState(false)
      const navigate = useNavigate()

      const params = useParams()

       const handleChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

       useEffect(() => {
        
        const { id } = params

        const todos = JSON.parse(localStorage.getItem("todos")) || []
       
        const todo = todos.find(todo => todo.id === id)
    
        setState(todo)

       },[params])
    //    console.log('state', state)

       const handleSubmit = () => {
        let { id, title, dueDate, description, priority, status, isCompleted } = state

        title = title.trim()
        if (title < 3) { return window.toastify("Please enter title", "error") }
        if (!dueDate) { return window.toastify("Please enter due date", "error") }
        if (!description) { return window.toastify("Please enter description", "error") }
        if (!priority) { return window.toastify("Please enter priority", "error") }

        const todo = { title, dueDate, description, priority, status, isCompleted }
        todo.updatedAt = new Date().getTime()


        setIsProcessing(true)

        const todos = JSON.parse(localStorage.getItem("todos")) || []
        const updatedTodos = todos.map(item => {
            if (item.id === id) 
                return { ...item, ...todo }
            return item
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))

        setTimeout(() => {
            setIsProcessing(false)
            window.toastify("A new user has been successfully updateds", "success")
            navigate("/dashboard/todos")
        }, 500);
        console.log('state', state)
        console.log('todos', todos)

    }

  return (
      <main className='auth flex-center'>
            <div className='container'>
                <div className='card p-4 mx-auto'>
                    <div className='d-flex align-itmes-center justify-content-between py-4'>
                        <Title level={2} className='mb-0'>Update Todo</Title>
                        <Button type='primary' onClick={() => { navigate("/dashboard/todos") }}>Todos</Button>
                    </div>
                    <Form layout='vertical'>
                        <Item label="Title" required>
                            <Input type="title" size='large' placeholder="Enter title" value={state.title} name="title" onChange={handleChange}/>
                        </Item>
                        <Item label="Due-Date">
                            <DatePicker size='large' placeholder="Enter due date"  value={state.dueDate ? dayjs(state.dueDate) : null} name="title" className='w-100' onChange={(obj, dueDate) => {setState(s => ({...s, dueDate})) }} />
                        </Item>
                        {/* <Item label={`Due-Date: ${state.dueDate || ""}`}>
                            <DatePicker size='large' placeholder="Enter due date"  value={state.dueDate ? dayjs(state.dueDate) : null} name="title" className='w-100' onChange={(obj, dueDate) => {setState(s => ({...s, dueDate})) }} />
                        </Item> */}
                        <Item label="Description">
                            <Input.TextArea size='large' placeholder="Enter description" value={state.description}  name="description" style={{ height: 100, resize: 'none' }} onChange={handleChange} />
                        </Item>
                        <Item label="Priority">
                            <Select size='large' placeholder="Please select priority"  value={state.priority} onChange={(priority) => {setState(s => ({...s, priority})) }} >
                                <Option value="low">Low</Option>
                                <Option value="medium">Mediun</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Edit Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
  )
}

export default Edit