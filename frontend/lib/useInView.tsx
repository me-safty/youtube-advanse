import { useRef, useEffect, useState } from "react"

const useInView = () => {
	const myRef = useRef()
	const [isVisible, setIsVisible] = useState<boolean>(false)
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			setIsVisible(entry.isIntersecting)
		})
		observer.observe(myRef.current as unknown as Element)
	})
	return [myRef, isVisible]
}

export default useInView
