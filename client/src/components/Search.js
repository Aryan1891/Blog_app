import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import Post from '../Post';

export default function Search() {
  const [posts, setPosts] = useState([]); 
  const [query, setQuery] = useState(''); 
  const [results, setResults] = useState([]); 
  const [debouncedQuery, setDebouncedQuery] = useState(''); 

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 
    return () => clearTimeout(handler); 
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:4000/search/${debouncedQuery}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data); 
        } else {
          console.error('Failed to fetch search results');
          setResults([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setResults([]); 
      }
    };

    fetchSearchResults();
  }, [debouncedQuery]);

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Posts by Title"
      />

      {query.trim().length === 0 ? (
        <>
          <HeroSection />
          {posts.length > 0 && posts.map((post) => <Post key={post._id} {...post} />)}
        </>
      ) : (
        <>
          {results.length > 0 ? (
            results.map((post) => <Post key={post._id} {...post} />)
          ) : (
            <p>No results found</p>
          )}
        </>
      )}
    </div>
  );
}
