import { useEffect, useState } from 'react';
import {  userDelete, userListFetch } from '../server/FetchData';
import UserCard from '../components/resuable/UserCard';
import classes from "../pages/style.module.css";
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [userData, setUserData] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const users = await userListFetch();
            if (users) {
                setUserData(users);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await userDelete(id);
            setUserData(userData.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleGetUserDetail = async (id: number) => {
        navigate(`/details/${id}`); // Navigate to the details page

    }

    return (
        <div className={classes.userlist_container}>
            {userData.map((item) => (
                <UserCard
                    key={item.id}
                    userData={item}
                    onDelete={handleDelete}
                    handleGetUserDetail={handleGetUserDetail}
                />
            ))}
        </div>
    );
}

export default UserList;
