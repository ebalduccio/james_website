'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Loading from '@/components/Loading'  // Importe o novo componente

interface Post {
  id: number;
  title: string;
  // Adicione outros campos conforme necessário
}

const RightbarPB = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Post[]>([])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)  // Novo estado para controlar o loading
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim()) {
        setIsLoading(true)  // Inicia o loading
        try {
          const res = await fetch(`/api/posts?q=${encodeURIComponent(searchQuery)}`)
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()
          setResults(data)
          setIsDropdownVisible(true)
        } catch (error) {
          console.error('Failed to fetch search results:', error)
        } finally {
          setIsLoading(false)  // Finaliza o loading
        }
      } else {
        setResults([])
        setIsDropdownVisible(false)
      }
    }

    const debounceTimer = setTimeout(fetchResults, 300)

    return () => clearTimeout(debounceTimer)
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/personalblog/search?q=${encodeURIComponent(searchQuery)}`)
      setIsDropdownVisible(false)
    }
  }

  return (
    <div className='w-full max-h-screen sticky hidden lg:block top-[10rem]'>
      <div className="relative" ref={dropdownRef}>
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-8" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsDropdownVisible(true)}
          />
        </form>
        {isDropdownVisible && (
          <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg overflow-hidden">
            {isLoading ? (
              <Loading />
            ) : results.length > 0 ? (
              <div className="max-h-60 overflow-y-auto">
                {results.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/personalblog/posts/${post.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownVisible(false)}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-sm text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default RightbarPB