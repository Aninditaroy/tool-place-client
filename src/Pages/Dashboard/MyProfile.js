import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const MyProfile = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    // if (res.status === 401 || res.status === 403) {
                    //     signOut(auth);
                    //     localStorage.removeItem('accessToken');

                    // } navigate('/');
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);


    return (
        <div>
            <h2 className='text-2xl my-5 text-center font-semibold'>My Profile</h2>

        </div>

    );
};

export default MyProfile;