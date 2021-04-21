import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import React, {useState, useEffect} from 'react'


export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res =>
            setFriends(res.data))
        .catch(err => console.log({err}))

        
    },[]);

    return (
        <div>
            <h3>Friends:</h3>
            {friends.map(friend=>(
                <>
                <p key={friend.id}>{friend.name}</p>
                </>
                
            ))}
            
        </div>
    )
}
