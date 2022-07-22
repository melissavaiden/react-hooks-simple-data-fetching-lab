// create your App component here
import React, {useState, useEffect} from "react";
import { data } from "../mocks/data";

function App() {
    const [newdata, setNewData] = useState(data)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((r) => r.json())
          .then((data) => {
              setNewData(data);
              setIsLoaded(true);
          });
      }, []);

    if (!isLoaded) {
     return <p>Loading...</p>
    }

    return (
        <div>
             <p>
                <img src={newdata.message} alt='A Random Dog'></img>
             </p>
         </div>
    )
}

export default App;