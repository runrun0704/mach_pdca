import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiDemo() {
    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pdcaes')
        .then(res => {
            setPdcaes(res.data)
        })
    }, [])

    return(
        <div>
            <h2>APIのdemoを表示したい</h2>
            <p>{pdca.p}</p>
        </div>
    )
    
}
export default ApiDemo;