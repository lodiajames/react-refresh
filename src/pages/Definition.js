import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
export default function Definition (){
    const [word, setWord] = useState()
    const {search} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
                const json = await response.json();
    
                console.log(json[0].meanings)
                setWord(json[0].meanings)
            }
            catch (error){
                navigate('/404')
                 console.log('Error fetching data:', error)
            }
        }
  
    fetchData()
    }, [search,navigate])
    return (
      
         <>
           {word?
           <>
      <h1 className="text-3xl">Here is a definition: </h1>
      {word.map((meaning)=>{
        return (
        
         <p>
        <span className="text-xl capitalize">{meaning.partOfSpeech + ": "  } </span> 
         {meaning.definitions[0].definition}
         </p>
        )
      })}
      </>
    :null}


         </>
  )
}