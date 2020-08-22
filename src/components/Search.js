import React, {useState, useEffect} from "react";
import Cards from "./Cards"
import axios from 'axios'


export default function Search() {




const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState(["a"]);

useEffect(() => {
  axios
  .get('https://5f3fba8744212d0016fed1c4.mockapi.io/data')
.then(response => {
  const data = response.data; 
   setSearchResults(data);
   console.log('data', data)
  })  
.catch(error => {
  console.log('error retrieving data', error)
})
  
}, [searchTerm]);

// function Results(){searchResults.filter((data) => {
//   return data.toLowerCase().includes(searchTerm.toLowerCase());}
// )}
// Results()



const handleChange = (e) => {
  setSearchTerm(e.target.value)
  axios
  .get('https://5f3fba8744212d0016fed1c4.mockapi.io/data', e.target.value)
  .then(response => {
    console.log("response", response)
  })
  .catch()
};

  return (
    <div className="search">
      <h1>Search</h1>
      <form>
       <label htmlFor="artistName">
          <input
          id="artistName"
            type="text"
            name="artistName"
            placeholder="Artist Name"
            onChange={handleChange}
            value={searchTerm}
          />
       </label>
       <label htmlFor="songTitle">
          <input
          id="songTitle"
            type="text"
            name="songTitle"
            placeholder="Song Title"
            onChange={handleChange}
            value={searchTerm}
          />
       </label>
        {/* <button type="submit">Search</button> */}
      </form>
      
<Cards />

    </div>
  );
}


   /* <ul>
          {searchResults.map((item) => (
            <li key = {item}>{item}</li>
          ))}
       </ul>*/