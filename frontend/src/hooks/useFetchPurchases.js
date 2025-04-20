import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance.js';

const useFetchPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPurchases = async () => {
            setLoading(true);
            try {
                console.log(localStorage.getItem('token'));
                const response = await axiosInstance.get('/pur/purchases',
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
        fetchPurchases();
    }, []);

    return { purchases, loading, error };
};

export default useFetchPurchases;