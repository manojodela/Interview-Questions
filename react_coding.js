fetch users by calling api to render users and filter users based on search by name and username

import axios from "axios";
import { useEffect, useState } from "react";

const Demo = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (response.data.length) {
            const data = response.data;
            setUsers(data);
            setFilteredUsers(data); // Initialize filteredUsers with the full list
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const handleSearch = (e) => {
        const name = e.target.value.toLowerCase();
        if (name === "") {
            setFilteredUsers(users);
        } else {
            const usersData = users.filter(user => user.name.toLowerCase().includes(name) ||  user.username.toLowerCase().includes(name));
            setFilteredUsers(usersData);
        }
    }

    return (
        <>
            <h2>Users</h2>
            <input type="text" onChange={handleSearch} placeholder="Search by name"/>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong><br/>
                        <strong>{user.username}</strong><br/>
                        {user.email}<br/>
                        {user.address.street}<br/><br/>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Demo;


render a list of users and search users by name. each user has like and diskike button that can be increased and decreased and optimse by using usecallback hook

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Demo = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [likes, setLikes] = useState({});

    const getUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (response.data.length) {
            const data = response.data;
            setUsers(data);
            setFilteredUsers(data);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleSearch = (e) => {
        const name = e.target.value.toLowerCase();
        if (name === "") {
            setFilteredUsers(users);
        } else {
            const usersData = users.filter(user => user.name.toLowerCase().includes(name) || user.username.toLowerCase().includes(name));
            setFilteredUsers(usersData);
        }
    };

    const handleLike = useCallback((id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: (prevLikes[id] || 0) + 1,
        }));
    }, []);

    const handleDisLike = useCallback((id) => {
        setLikes((prevLikes) => {
            const newLikes = { ...prevLikes };
            if (newLikes[id] > 0) {
                newLikes[id] -= 1;
            }
            return newLikes;
        });
    }, []);

    return (
        <>
            <h2>Users</h2>
            <input type="text" onChange={handleSearch} placeholder="Search by name" />
            <ul>
                {filteredUsers.map(user => (
                    <div key={user.id} className="flex flex-direction-row">
                        <li>
                            <strong>{user.name} &nbsp;</strong><br />
                        </li>
                        <li>
                            <p>Likes: {likes[user.id] || 0}</p>
                            <button type="button" className="btn btn-primary bg-dark" onClick={() => handleLike(user.id)}>Like</button> &nbsp;
                            <button type="button" className="btn btn-primary bg-dark" onClick={() => handleDisLike(user.id)}>Dislike</button>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default Demo;

