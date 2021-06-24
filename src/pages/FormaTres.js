import React, { useCallback, useRef, useState } from 'react'
import { useBookSearch } from '../hooks/useBookSearch'

const FormaTres = () => {
	const [query, setQuery] = useState('')
	const [pageNumber, setPageNumber] = useState(1)

	const { books, error, hasMore, loading } = useBookSearch(query, pageNumber)

	const observer = useRef()
	const lastBookElementRef = useCallback(
		(node) => {
			if (loading) return
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1)
				}
			})

			if (node) observer.current.observe(node)

			console.log(node)
		},
		[loading, hasMore]
	)

	const handleSearch = (e) => {
		setQuery(e.target.value)
		setPageNumber(1)
	}

	return (
		<div className='container'>
			<input type='text' value={query} onChange={handleSearch} />

			{books.map((book, index) => {
				if (books.length === index + 1) {
					return (
						<div ref={lastBookElementRef} key={book}>
							{book}
						</div>
					)
				} else {
					return <div key={book}>{book}</div>
				}
			})}

			{loading && <div>Loading...</div>}

			{error && <div>Error</div>}
		</div>
	)
}

export default FormaTres
