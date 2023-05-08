const Loading = () => {
	return (
		<div className="container">
			<div className="py-3 my-1 flex gap-6 overflow-hidden">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="lodgingAnimation min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-[#33333353] bg-opacity-80 rounded-full"
					></div>
				))}
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 w-full">
				{[...Array(17)].map((_, i) => (
					<div className="w-full" key={i}>
						<div className="lodgingAnimation w-full h-[50vw] sm:h-[13vw] lg:h-[11vw] bg-[#33333353] bg-opacity-80 rounded-xl"></div>
						<div className="lodgingAnimation w-[80%] h-[8px] rounded-xl bg-[#33333353] bg-opacity-80 mt-3"></div>
						<div className="lodgingAnimation w-[60%] h-[8px] rounded-xl bg-[#33333353] bg-opacity-80 mt-2"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Loading
