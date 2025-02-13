import { useState, useEffect } from 'react';

const useCurrentUser = () => {
  const [user, setUser] = useState({
    name: 'Ashish Singh',
    title: 'Senior Software Engineer',
    location: 'Ottawa, Canada',
    email: 'a.s@example.com',
    website: 'https://ashish-k-singh.dev',
    github: 'devaaks',
    twitter: 'devaaks',
    bio: 'Passionate full-stack developer with 9+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies. Open source contributor and tech community advocate.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'],
    avatar: '/ninja.jpg',
    blogPosts: [
      { title: 'JS Ninja', date: '2023-02-10', readTime: '12 min' },
      { title: 'Mastering React Hooks', date: '2023-03-15', readTime: '8 min' },
      { title: 'AWS Best Practices', date: '2023-02-28', readTime: '10 min' },
      { title: 'TypeScript Tips and Tricks', date: '2023-02-10', readTime: '6 min' },
    ]
  });

  // TODO: Fetch user data from an API

  return user;
};

export default useCurrentUser;