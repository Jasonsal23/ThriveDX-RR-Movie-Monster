import {useState} from 'react'

export default function IdeasForm(){
    let [input,setInput]=useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        PaymentResponse.addIdeas(input)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setInput(e.target.value)}/>
                <button type="submit">Submit your idea!</button>
            </form>
        </div>
    )
}