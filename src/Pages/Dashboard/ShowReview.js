import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import divider from '../../Assets/separator.png';
import ReviewDetails from './ReviewDetails';

const ShowReview = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-4/5 mx-auto  my-20'>
            <h2 class="text-4xl font-bold lg:text-5xl text-center text-accent">
                Reviews
            </h2>
            <img src={divider} alt="" className='mb-3 w-28 mx-auto mt-1' />
            <div className="holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-16">

                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    ></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default ShowReview;