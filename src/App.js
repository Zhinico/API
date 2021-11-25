import React, {useState, useEffect} from 'react';
import Navbar from  './components/Navbar'
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import './App.css';

function App(){

const  [characters, setCharacters] = useState([]);
const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fecthCharacters = (url) =>{

     fetch(url)
    .then(response =>response.json())
    .then(data => {
      setCharacters(data.results)
      setInfo(data.info)
    } )
    .catch(error => console.log(error))
  };

  const onPrevious = () =>{
     fecthCharacters(info.prev);
  }

  const onNext = () =>{
      fecthCharacters(info.next);
  } 



  useEffect(() => {

    fecthCharacters(url);
         }, [])


   return(
    
    <>
     
    <Navbar brand="Rickcloso"/> 
    <div className="constainer mt-5">

    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
     <Characters characters={characters}/>
     <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
     </div>
     </>
     )
  }
export default App;
