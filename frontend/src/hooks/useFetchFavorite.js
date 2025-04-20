import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance.js';

const useFetchFavorite = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorite = async () => {
            setLoading(true);
            try {
                console.log(localStorage.getItem('token'));
                const response = await axiosInstance.get('/fav/get',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    }
                );
                setPurchases(response.data.content);
            } catch (err) {
                setError(err.response?.data?.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };  
        fetchFavorite();
    }, []);

    return { purchases, loading, error };
};

export default useFetchFavorite;