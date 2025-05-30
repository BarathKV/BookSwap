import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance.js';

const useFetchRecent = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                console.log(localStorage.getItem('token'));
                const response = await axiosInstance.get('/post/recent',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    }
                );
                setPosts(response.data.content);
            } catch (err) {
                setError(err.response?.data?.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };  

        fetchPosts();
    }, []);

    return { posts, loading, error };
};

export default useFetchRecent;