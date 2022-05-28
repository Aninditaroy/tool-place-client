
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './../Shared/Loading';
const MyOrders = () => {
    // const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')
            }
            return res.json()
        })
    )

    if (isLoading || loading) {
        return <Loading />
    }


    return (
        <div>
            <h2 className='text-2xl my-5 text-center font-semibold'>My Orders:</h2>
            {/* <span className='text-primary'>{orders.length}</span> */}
            <div className="overflow-x-auto">
                <table className="table w-full table-compact ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Tool</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} order={order}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.toolName}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td>{order.minQuantity}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/ dashboard / payment / ${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyOrders;