import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiDelete() {
    const [pdca,setPdcaes] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/pdcaes/122')
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    function deletePdca(){
        axios.delete('http://localhost:8000/api/pdcaes/122/')
        .then(() => {
            alert("Pdca deleted!");
            setPdcaes(null)
        });
    }

    if (!pdca) return "No Pdca!"

    return(
        <div>
            <h2>Api_Delete</h2>
            <p>{pdca.title}</p>
            <button onClick={deletePdca}>Delete</button>
        </div>
    )
    
}
export default ApiDelete;