import React,{useState , useEffect} from 'react';
import axios from 'axios';



const Myinpage = (props) => {

    let [ interviewId, interviewIdUpdate ] = useState([]);
    const [typeData,insertDB] = useState(0);   

    const interviewDataSetting = async () => {

        axios({
            url: `/cyhpreinterview?type=${props.type}`,
            method : "POST"
        })
                .then(
                    (result) => {  
                        try{
                            console.log(result);
                            interviewIdUpdate([...result.data]);
                            insertDB(result.data[result.data.length - 1].key_id)
                        }
                        catch(err){ console.log('result 타입 확인' + err.message + '/' + typeof result) }
                    }
                )
                .catch( e => { console.log(e +'에러로 통신 제한') }
                ) 
    } 

    useEffect( () => {  interviewDataSetting(); } , [typeData]  )          
        return (  
            <div><h2>{ interviewId.length > 0 ? "사전인터뷰" : "데이터 전송 중" }</h2>
            {
                interviewId.map(( datasql, i ) => {
                    return(
                        <li>
                            <h3>{i+1} {datasql.cyh_subject}</h3><div>{datasql.cyh_content}</div>
                        </li>
                    )
                })
            }
            </div>
        );     
};

export default Myinpage;