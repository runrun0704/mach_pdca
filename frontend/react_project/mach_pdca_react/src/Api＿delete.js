import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';


function ApiDelete() {
    const [pdca,setPdcaes] = useState({})

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pdcaes/${id}`)
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    const navigate = useNavigate();

    function deletePdca(){
        axios.delete(`http://localhost:8000/api/pdcaes/${id}/`)
        .then(() => {
            alert("Pdca deleted!");
            setPdcaes(null)
        });
        navigate('/')
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
