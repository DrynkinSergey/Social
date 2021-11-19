import React from "react";
import s from './users.module.css';
const Users = (props) => {
    debugger

    if (props.users.length === 0) {
        props.setUsers( [
            {id:1, name:'Sergey',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
            {id:2, name:'Sasha',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
            {id:3, name:'Andrey',status:'Hi', followed:false, location:{city:'Kiev', country:'Ukraine'}},
            {id:4, name:'Alice',status:'Hi', followed:true, location:{city:'Moscow', country:'Russia'}},
       ] )
    }
    return <div>
        {

            props.users.map(user => <div key={user.id}>
                    <span>{user.name}</span>
                    <div>
                        {user.followed ? <button onClick={() => {props.follow(user.id)}}>follow</button > : <button onClick={() => {props.follow(user.id)}}>Unfollow</button>}
                    </div>
            </div>)
        }
    </div>

}
export default Users;