
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order :{myOrders.length}</h1>
            </div>

            <div className="overflow-x-auto container table-compact mx-auto">
                <table className="table w-full mt-10 mb-64 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Tool</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.userName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(order.price && order.paid) && <>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyOrders;