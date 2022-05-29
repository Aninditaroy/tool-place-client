
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import DeleteOrderModal from './DeleteOrderModal';
import MyOrdersRow from './MyOrdersRow';


const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const [myOrders, setMyOrders] = useState([]);
    const [deletingOrder, setDeletingOrder] = useState(null);
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
    }, [user, deletingOrder])

    return (
        <div>
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h2 className='text-2xl text-center'><span className='font-semibold'>Total Orders: <span className='badge badge-lg py-2 bg-primary'>{myOrders.length}</span></span></h2>
            </div>

            <div className="overflow-x-auto container table-compact mx-auto">
                <table className="table w-full mt-10 mb-64 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Tool</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <MyOrdersRow
                                order={order}
                                key={order._id}
                                // refetch={refetch}
                                index={index}
                                setDeletingOrder={setDeletingOrder}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteOrderModal
                    deletingOrder={deletingOrder}
                    // refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                />
            }
        </div >
    );
};

export default MyOrders;