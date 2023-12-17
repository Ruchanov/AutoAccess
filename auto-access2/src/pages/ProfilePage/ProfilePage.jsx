import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            // const response = await fetch('http://127.0.0.1:8000/profile/', {
            //     headers: {
            //         'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            //     }
            // });
            // if (response.ok) {
            //     const userData = await response.json();
            //     setUser(userData);
            // }
            const accessToken = localStorage.getItem('access_token');
            if (accessToken) {
                try {
                    const response = await fetch('http://127.0.0.1:8000/profile', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Ошибка при загрузке данных');
                    }
                    const data = await response.json();
                    setUser(data);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            }
        };

        const fetchUserPosts = async () => {
            const response = await fetch('http://127.0.0.1:8000/cars/user_posts/', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUserPosts(data);
            }
        };
        fetchUserProfile();
        fetchUserPosts();
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            {user && (
                <div>
                    <h1>Welcome, {user.username}</h1>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <h2>Your Posts</h2>
            <Link to="/createCar">Create Post</Link>
            {userPosts.map((post) => (
                <CarItem key={post.id} car={post} />
            ))}
        </div>
    );
};

export default ProfilePage;
