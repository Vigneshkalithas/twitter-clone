import React ,{useState} from 'react';
import {ImStarHalf} from "react-icons/im";
import {FiMoreHorizontal} from "react-icons/fi";
import {FaRetweet , FaShare} from "react-icons/fa";
import {BiMessageRounded} from "react-icons/bi";
import {FcLike} from "react-icons/fc";
import {FiShare} from "react-icons/fi";
import "./styles/Content.css"

function Content() {
  const  [tweet ,setTweet] = useState();
  const [res, setRes] = useState([
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ]);
  const [editText,setEditText] = useState()
  
  return (
    <div className='content-container'>
        <div className='header'>
            <h2>Home</h2>
            <div><ImStarHalf/></div>
        </div>
        <div className='user-tweet-input'>
          <div className="">
            <img className='userDp' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user-dp"/>
          </div>
          <input type="text" className="inputTweet" placeholder="What's happening" onChange={(e)=>{
            setTweet(e.target.value);
          }}></input>
        </div>
        <div className='tweet-btn-head'>
           <button className='btn-tweet' onClick={()=>{
            setRes([tweet,...res])}}>Tweet</button>
        </div>{res.map((post,index)=>{
          return(
          <div>
           <Tweets res={res}  editText={editText} setEditText={setEditText} setRes={setRes} post={post} index={index}/>
          </div>
          )
        })}
       
       
    </div>
  )
}

function Tweets({res ,setRes, post , index , editText,setEditText}){
    const [showoptions,setOptions] = useState(true);
    const [edit,setEdit] = useState(true);
    const [like, setLike] = useState(0);
    
    return(
        <>
        <div className='tweets-head'>
             <div className='dp-name'>
                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=619" alt="userimage-tweet"/>
                <h4>Vignesh kalithas</h4>
             </div>
             <div className='options'>
               <button onClick={()=>{
                setOptions(!showoptions)
               }}><FiMoreHorizontal/></button>
             </div>
             {showoptions ? "" : <div className='show-options'>
              <button onClick={()=>{
                const copyTweets = [...res];
                copyTweets.splice(index,1)
                setRes(copyTweets)
              }}>Delete</button>
              <button onClick={()=>{
             setEdit(!edit)
             setOptions(!showoptions)
              }}>Edit</button>
              </div>}
        </div>
        <div className='tweet-msg'>
            {edit ?  <p>{post}</p> : 
                  
                  <>
                  <form>
                  <textarea onChange={(e)=>{
                    setEditText(e.target.value)                   
                  }}>{post}</textarea>
                  <button onClick={(e)=>{
                    e.preventDefault();
                    const editTweets = [...res]
                    editTweets.splice(index,1,editText)
                    setRes(editTweets);
                    setEdit(!edit)
                  }}>Submit</button>
                  </form>
                  </>
                  }
                  
        </div>
        <div className='footer-emoji'>
          <span><BiMessageRounded/></span>
          <span><FaRetweet/></span>
          <div>
            <span><FcLike onClick={()=>setLike(like+1)}/></span>
            <span className='like'>{like}</span>
          </div>
          <span><FiShare/></span>
          </div>
        </>
    )
}

export default Content