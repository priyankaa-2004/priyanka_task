"use client"
import React, { useState } from 'react';

const ProfilePage = ({ fullName, email }) => {
    const [query, setQuery] = useState('');
    const [queries, setQueries] = useState([]);

const handlePostQuery = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
        setQueries([...queries, { text: query, likes: 0, comments: [] }]);
        setQuery('');
    }
};

const handleLike = (index) => {
    setQueries((prevQuery) => {
      const update = [...prevQuery]; 
      update[index] = {...update[index], 
        likes: update[index].liked ? update[index].likes + 1 : update[index].likes + 1, liked: !update[index].liked,
      };
      return update;
    });
  };

const handleComment = (index, commentText) => {
    setQueries((prevQuery) => {
        const update = [...prevQuery];
        if (!update[index].comments.includes(commentText)) {
            update[index].comments.push(commentText);
        }
        return update;
    });
};

const deleteTask = (index) => {
    let copyquery = [...queries];
    copyquery.splice(index, 1);
    setQueries(copyquery);
};

    return (
        <div className='center'>
        <div className="min-h-screen flex flex-col font-mono items-center justify-center container">
            <div className="max-w-md w-full space-y-8 profile-container">
                <div>
                    <p className="m-5 text-center text-3xl text-white-600 font-bold">{fullName}</p>
                    <p className="m-5 text-center text-xl text-white-600">{email}</p>
                </div>
                <div className="mt-8">
                    <form onSubmit={handlePostQuery}>
                        <textarea
                            className="w-full h-32 p-2 pl-2 pt-2 border border-gray-300 text-black rounded-md resize-none focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Post your query..." value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit"
                            className="mt-2 w-full py-3 text-lg bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
                        >
                            Post
                        </button>
                    </form>
                </div>
                <div className="mt-8">
                    <h3 className="text-3xl font-semibold profile-queries">Queries:</h3>
                    { queries.length === 0 ? (
                        <p className="mt-2 text-gray-400">No queries available</p>
                    ) :  (
                    <ul className="mt-2">
                        {queries.map((q, index) => (
                            <li key={index} className="border-b border-gray-200 py-2">
                                <div className="flex text-2xl justify-between items-center">
                                    <div>
                                        {q.text}
                                        <div className="flex items-center mt-1">
                                        <button className="mr-2 text-sm p-3 text-white-300 bg-gray-600 hover:bg-gray-700"
                                                onClick={() => handleLike(index)}>
                                                Like({q.likes >=1 ? 1 : 0}) ♥
                                            </button>
                                            <button
                                                className="mr-2 text-sm p-3 text-white-300 bg-gray-600 hover:bg-gray-700"
                                                onClick={() => {
                                                    const commentText = prompt('Enter your comment:');
                                                    if (commentText) {
                                                        handleComment(index, commentText);
                                                    }
                                                }}
                                            >
                                                Comment✍
                                            </button>
                                        </div>
                                        <ul className="mt-2">
                                            {q.comments.map((comment, commentIndex) => (
                                                <li key={commentIndex} className="text-lg pl-5 text-gray-300">
                                                    {comment}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <button
                                            className='text px-3 py-2 m-5 rounded-lg bg-red-400 text-white'
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
