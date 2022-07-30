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
            <div>
                {pdca.map(item => (
                    <div>
                        <p>{item.p}</p>
                        <p>{item.d}</p>
                        <p>{item.c}</p>
                        <p>{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}
export default ApiDemo;