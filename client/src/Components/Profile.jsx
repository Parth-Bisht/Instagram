import React from "react";
import { GoVerified } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";
import styled from "styled-components";

const Profsty = styled.div`
  width:70%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  .imgtag {
    width: 168px;
    height: 168px;
    border-radius: 50%;
  }

  .profstruc{
    width:400px;
    
  }

  .namestruc{
    /* display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto; */
    display: flex;
    justify-content:space-evenly;
    align-items: center;
  }

  .userdiv{
    display:flex;
   align-items: baseline;

  }
  .userdiv>div {
    font-size: 28px;
  }
  
 .buttondiv{
  display: flex;
   .msg{
    background-color: white;
    border:1px solid gray;
    padding:4px;
    margin: 0 5px 0 5px;
    border-radius:4px;
   }
   .follow{
    background-color:#0095f6 ;
    color:white;
    padding: 4px 8px 4px 8px;
    border:1px solid gray;
    margin: 0 5px 0 5px;
    border-radius:4px;
   }
   .threedot{

    background-color: white;
    border:none;
    font-size: 24px;
    
   }

 }
 .postsno{
   margin:10px;
   /* border: 1px solid ; */
  
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-template-rows: auto;
  
   }
   .postsno div{
    font-weight: bold;
    padding:10px;
   }
   .postsno span{
    font-weight: normal;
   }
.founderdiv{
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  padding:20px;
  text-align: left;
  line-height: 150%;
}


`

export const Profile = ({
  username,
  posts_no,
  followers_no,
  following_no,
  user_proj_url,
  Avatar_url,
}) => {
  return (
    <Profsty>
      <div className="imgdiv">
        <img className="imgtag" src={Avatar_url} alt="Invalid-Image" />
      </div>
      <div className="profstruc">
        <div className="namestruc">
          <div className="userdiv">
            {" "}
            <div >{username}</div>
            <GoVerified style={{color: "0095f6"}}/>
          </div>

          <div className="buttondiv">
            <button className='msg' >Message</button>
            <button className='follow'>Follow</button>
            <button className='threedot'>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
        <div className="postsno">
          <div>{posts_no}<span>posts</span></div>
          <div>{followers_no}<span>followers</span></div>
          <div>{following_no}<span>following</span></div>
        </div>
        <div className="founderdiv">
          <div>{username}</div>
          <div>founder</div>
          <div>{user_proj_url}</div>
        </div>
      </div>
    </Profsty>
  );
};
