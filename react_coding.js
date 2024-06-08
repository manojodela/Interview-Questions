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

How to cancel the api request when called multiple times. 

import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Demo = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const controllerRef = useRef(null);

    const fetchPosts = async () => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }
        const newController = new AbortController();
        controllerRef.current = newController;
        setLoading(true);
        setError(null);

        setTimeout(async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", { signal: newController.signal });
                if (response.data.length) {
                    const data = response.data;
                    setPosts(data);
                } else {
                    throw new Error("Network response was not ok");
                }
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message)
                }
            } finally {
                setLoading(false);
            }
        }, 1000);
    }

    return (
        <>
            <button onClick={fetchPosts}>Fetch posts</button>
            {loading && <p>loading....</p>}
            {error && <p>{error}</p>}

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong><br />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Demo;

controllerRef: Reference to store the AbortController instance, which allows aborting an ongoing fetch request.
AbortController: Used to cancel ongoing fetch requests, ensuring only the latest request's result is used.
Abort Existing Request: If there's an ongoing request (controller exists), it aborts it.
Create New AbortController: A new controller is created for the new request.
Loading and Error States: Sets loading to true and resets the error state.
Delayed Fetch: Simulates a network delay using setTimeout. This delay can be removed for a real-world application.
Axios GET Request: Makes a GET request to the API with the abort signal.
Handle Response: On success, updates the posts state with the fetched data.
Error Handling: If an error occurs (excluding abort errors), updates the error state.
Finally Block: Sets loading to false once the request is complete.



how to memoise the ui which won't affect your component whenever other components are re-rendering in turn optimising your website and making it smooth and fast.
render products by rating 
    import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const Demo = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState(5);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setPosts(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleChange = (e) => {
        setSortOrder(Number(e.target.value));
    };

    const sortedPosts = useMemo(() => {
        return posts.filter(post => post?.rating?.rate <= sortOrder);
    }, [posts, sortOrder]);

    return (
        <>
            <h3>Filter by Rating</h3>
            <input
                type="range"
                onChange={handleChange}
                min={2}
                max={5}
                value={sortOrder}
                style={{ width: '1000px' }}
            />
            <h3>Selected Order: {sortOrder}</h3>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {sortedPosts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title} - {post?.rating?.rate}</strong><br />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Demo;


 how to use react memo hook to optimise the ui. Watch till the end to learn how to memoise the ui
 which won't affect your component whenever other components are re-rendering in turn optimising your website and making it smooth and fast.


import axios from "axios";
import { memo, useEffect, useMemo, useState } from "react";

const Demo = () => {

    const Post = memo(({ post }) => {
        return (<>
            <div>
                <strog>{post?.title}</strog>
                <p>{post?.content}</p>
                {post?.comment?.map((comment) => (
                    <Comment comment={comment} /> 
                ))}
            </div>
        </>)
    });


    const Comment =  memo(({ comment }) => {
        return (<>
            <div>
                <>
                    <p>{comment.text}</p>
                    <p>{comment.author}</p><br/>
                </>
            </div>
        </>)
    });


    const [posts, setPosts] = useState([
        {
            id: 0,
            title: "react post ",
            content: "hiring reactjs with 3 years",
            description: "description",
            comment: [{ id: 1, text: "nice job offer with 12 lakh ctc", author: "manoj" }]
        },
        {
            id: 1,
            title: "react Nodejs ",
            content: "hiring Nodejs with 3 years",
            description: "description",
            comment: [{ id: 3, text: "nice job offer with 15 lakh ctc", author: "manoj" }]

        }
    ]);

    const addComment = (postId, comment) => {
        setPosts((prevPost) => {

            return prevPost.map(post => {
                if(post.id == postId){
                    return {...post, comment: [...post.comment, comment]}
                }
                return post;
            })
        })
    }




    return (
        <>
            <ul>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </ul>
            <button onClick={() => {
                addComment(Math.floor(Math.random() * posts.length), {
                    id: 2,
                    text: "new comment added",
                    author: "Test added"
                })
            }}>Add Comment to post</button>
        </>
    );
};

export default Demo;


how to use the caching concept in react.js. Handle large amounts of images with ease and optimise your ui accordingly.
Solve this coding question by using the caching concept for optimising performance and managing image loading for slower internet.

import axios from 'axios';
import React, { useEffect, useState } from 'react';


const fetchImage = async (url) => {
    try {
        // Check if the image is already cached
        const cachedImage = localStorage.getItem(url);
        if (cachedImage) {
            return cachedImage;
        }

        // Fetch the image if not cached
        const response = await axios.get(url, { responseType: 'blob' });
        const imageBlob = response.data;

        // Convert the Blob to a Data URL
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        const dataURL = await new Promise((resolve) => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });

        // Cache the image
        localStorage.setItem(url, dataURL);

        return dataURL;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

const CachedImage = ({ src, alt, ...props }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const cachedSrc = await fetchImage(src);
                setImageSrc(cachedSrc);
            } catch (error) {
                setImageSrc(src); // Fallback to the original source on error
            }
        };

        loadImage();
    }, [src]);

    return <img src={imageSrc} alt={alt} {...props} />;
};


const Demo = () => {
    const imageUrls = [
        'https://images.unsplash.com/photo-1717457781929-2c19fed97617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1663050697110-5a587ae85177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1715484620057-1145dba8ac76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1716506479875-70a866214c71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664367173375-ec4c917f7d55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1717707736683-d62692e1e2c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    ];

    return (
        <div>
            <h1>Image Caching Example</h1>
            <div>
                {imageUrls.map((url, index) => (
                    <CachedImage key={index} src={url} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Demo;


theme changer

// src/App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import '../App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <ThemeToggleButton />
    </div>
  );
};

const Demo = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default Demo;


// src/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

ThemeToggleButton.js

// src/ThemeToggleButton.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggleButton;

