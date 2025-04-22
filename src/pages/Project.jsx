// src/pages/Project.jsx
import React, { useState, useEffect } from 'react'

export default function Project() {
  const [repos, setRepos] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/inspire12/repos')
    .then(res => res.json())
    .then(data => {
      // stargazers_count 기준 내림차순 정렬
      const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepos(sorted)
    })
    .catch(err => console.error(err))
  }, [])
  
  return (
    <section className="min-h-screen p-8 pt-24">
      <h2 className="text-4xl mb-6">Projects (Star 순)</h2>
      <ul className="space-y-4">
        {repos.map(repo => (
          <li
            key={repo.id}
            className="border p-4 rounded hover:shadow transition-shadow"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline"
            >
              {repo.name} ({repo.stargazers_count} ★)
            </a>
            {repo.description && (
              <p className="text-gray-600 mt-1">{repo.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
