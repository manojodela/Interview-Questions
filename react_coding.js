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

Notes manager add, edit and delete note

import { useState } from "react";

const Demo = () => {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const addNotes = () => {
        if (editId) {
            setNotes((prev) => prev.map(note => note.id === editId ? { ...note, text: editText } : note));
            setEditId(null);
            setEditText("");
        } else {
            setNotes((prev) => [
                ...prev,
                { id: Date.now(), text }
            ]);
        }
        setText("");
    }

    const handleDelete = (id) => {
        setNotes((prev) => prev.filter(note => note.id !== id));
    }

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    }

    return (
        <>
            <div className="w-50 margin-auto">
                <h2>Notes Manager</h2>
                <div className="row">
                    <div className="column-4">
                        <input 
                            type="text" 
                            value={editId ? editText : text} 
                            onChange={(e) => editId ? setEditText(e.target.value) : setText(e.target.value)} 
                            placeholder="Add Note" 
                            style={{ width: "220px" }}
                        />
                    </div><br></br>
                    <div className="column-4">
                        <button 
                            style={{ backgroundColor: "black", color: "white", padding: "10px" }} 
                            onClick={addNotes}
                        >
                            {editId ? "Update Note" : "Add Note"}
                        </button><br />
                    </div>
                </div>
                <ul>
                    {notes.map(note => (
                        <div key={note.id} className="flex flex-direction-row">
                            <li>
                                <strong>{note.text} &nbsp;</strong><br />
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="btn btn-primary bg-dark" 
                                    onClick={() => handleDelete(note.id)}
                                >
                                    Delete
                                </button>&nbsp;
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary bg-dark" 
                                    onClick={() => handleEdit(note.id, note.text)}
                                >
                                    Edit
                                </button>&nbsp;
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Demo;
