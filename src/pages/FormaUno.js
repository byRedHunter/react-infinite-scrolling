import React, { useEffect, useState } from 'react'

const PAGE_NUMBER = 0

const FormaUno = () => {
	const [data, setData] = useState([])
	// eslint-disable-next-line
	const [page, setPage] = useState(PAGE_NUMBER)

	useEffect(() => {
		fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
			.then((res) => res.json())
			.then((info) => setData([...data, ...info.data]))
		// eslint-disable-next-line
	}, [page])

	/* const scrollToEnd = () => {
		setPage(page + 1)
	}

	window.onscroll = function () {
		// verificar tiene scroll en la parte inferior
		console.log('window execute')
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			scrollToEnd()
		}
	} */

	return (
		<div className='container'>
			{data.length > 0 &&
				data.map((info) => (
					<div key={info._id} className='element'>
						<h4>
							<span>Name:</span> {info.name}
						</h4>
						<h4>
							<span>Trips:</span> {info.trips}
						</h4>
						<h4>
							<span>Website:</span> {info.airline.website}
						</h4>
						<h4>
							<span>Slogan:</span> {info.airline.slogan}
						</h4>
					</div>
				))}
		</div>
	)
}

export default FormaUno
