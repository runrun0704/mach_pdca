import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ApiPost() {
    const [pdca,setPdcaes] = useState([])

    useEffect(() => {
        //POSTメソッドでフォームを作成可能な気がする。
        //GETメソッドでデータを取得して変数に代入。その後POSTメソッドでデータを加工する。
        axios.post('http://localhost:8000/api/pdcaes/',{
            //URLの最後に"/"を入れるとPOSTメソッドが通った。
            id:4,
            title:"post_test_2",
            goal:"post_test_2",
            p:"post_test_2",
            weight:2,
            deadline:"2022-07-19"
        })
        .then(res => {
            setPdcaes(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h2>Api_post</h2>
            <div>
                
            </div>
        </div>
    )
    
}
export default ApiPost;