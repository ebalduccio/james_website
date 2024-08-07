'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Loading from '@/components/Loading'  // Importe o novo componente

interface Post {
  id: number;
  title: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        setLoading(true)
        try {
          const res = await fetch(`/api/posts?q=${encodeURIComponent(query)}`)
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()
          setResults(data)
        } catch (error) {
          console.error('Failed to fetch search results:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchResults()
  }, [query])

  if (loading) return <Loading />

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {query}</h1>
      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <ul className="space-y-2">
          {results.map(post => (
            <li key={post.id} className="bg-white p-4 rounded-md shadow">
              <Link href={`/personalblog/post/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}