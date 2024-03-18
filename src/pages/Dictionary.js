import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary(){
    const [word, setWord] = useState()
    const navigate = useNavigate()
   

    return(
        <div className="flex justify-evently ">

            <label  htmlForfor="word" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dictionary</label>
            <input type="text" id="word" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-52" placeholder="e.g karma" onChange={(e)=>setWord(e.target.value)}/>
            <br/>


                <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={(e)=>{
                     e.preventDefault()
                    navigate(`/definition/${word}`)}}>
                Search
                </button>       

 </div>
    )
}