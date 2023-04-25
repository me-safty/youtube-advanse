"use client"

import { DownloadDetails, FormatDetails } from "@/typing"
import Image from "next/image"
import { ChangeEvent, useState } from "react"

interface DownloadProps {
	videoDownloadDetails: DownloadDetails
}

const Download = ({ videoDownloadDetails }: DownloadProps) => {
	const [selectedOption, setSelectedOption] = useState<string>()

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value)
	}

	const videoUrls = videoDownloadDetails.adaptiveFormats.filter(
		(e) => e.mimeType.slice(0, 9) === "video/mp4"
	)
	return (
		<div className="container">
			<div className="w-full flex items-center justify-center flex-col">
				<Image
					src={videoDownloadDetails.thumbnail[3].url}
					alt={videoDownloadDetails.title}
					width={videoDownloadDetails.thumbnail[3].width}
					height={videoDownloadDetails.thumbnail[3].height}
					className="rounded-xl text-center sm:w-[600px] sm:h-[480px] object-cover"
				/>
				<h1 className="text-white m-3">{videoDownloadDetails.title}</h1>
				<p className="text-gray-400 mb-2">Select the Quality you want</p>
				<select value={selectedOption} onChange={handleSelectChange}>
					<option value="">-- Please select --</option>
					{videoUrls.map((e) => (
						<option key={e.url} value={e.url}>
							{e.qualityLabel}
						</option>
					))}
				</select>
				{selectedOption && (
					<a
						href={selectedOption}
						target="_blank"
						className="bg-white bg-opacity-10 px-2 py-2 rounded-lg text-white m-3"
					>
						Download
					</a>
				)}
			</div>
		</div>
	)
}

export default Download
