import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import {baseURL} from './baseURL';

function ApiDelete() {
    const {id} = useParams();

    const [pdca,setPdcaes] = useState({})

    useEffect(() => {
        axios.get(`${baseURL}/${id}`)
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    const navigate = useNavigate();

    function deletePdca(){
        axios.delete(`${baseURL}/${id}/`)
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
