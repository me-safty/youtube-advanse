"use client"

import { DownloadDetails } from "@/typing"
import Image from "next/image"
import { ChangeEvent, useState } from "react"

interface DownloadProps {
	videoDownloadDetails: DownloadDetails
}

const Download = ({ videoDownloadDetails }: DownloadProps) => {
	const [selectedVideo, setSelectedVideo] = useState<string>()

	const handleSelectedVideo = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedVideo(event.target.value)
	}

	const [selectedAudio, setSelectedAudio] = useState<string>()

	const handleSelectedAudio = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedAudio(event.target.value)
	}

	const videoUrls = videoDownloadDetails.formats.filter(
		(e) =>
			(e.hasAudio && e.mimeType.slice(0, 9) === "video/mp4") ||
			(e.hasAudio && e.mimeType.slice(0, 10) === "video/webm")
	)
	const audioUrls = videoDownloadDetails.formats.filter(
		(e) =>
			(e.mimeType.slice(0, 9) === "audio/mp4" && e.hasAudio) ||
			(e.mimeType.slice(0, 10) === "audio/webm" && e.hasAudio)
	)

	return (
		<div className="container">
			<div className="w-full flex items-center justify-center flex-col my-5">
				<Image
					src={videoDownloadDetails.videoDetails.thumbnails[3].url}
					alt={videoDownloadDetails.videoDetails.title}
					width={videoDownloadDetails.videoDetails.thumbnails[3].width}
					height={videoDownloadDetails.videoDetails.thumbnails[3].height}
					className="rounded-xl text-center sm:w-[600px] object-cover"
				/>
				<h1 className="text-white m-3">
					{videoDownloadDetails.videoDetails.title}
				</h1>
				<div className="flex gap-3 flex-col sm:flex-row">
					<div className="">
						<p className="text-gray-400 mb-2">Video Downloading</p>
						<select value={selectedVideo} onChange={handleSelectedVideo}>
							<option value="">-- Please select --</option>
							{videoUrls.map((e) => (
								<option key={e.url} value={e.url}>
									{e.qualityLabel}
								</option>
							))}
						</select>
						{selectedVideo && (
							<a
								href={selectedVideo}
								target="_blank"
								className="bg-white bg-opacity-10 px-2 py-2 rounded-lg text-white m-3 block text-center"
							>
								Download
							</a>
						)}
					</div>
					<div className="">
						<p className="text-gray-400 mb-2">Audio Downloading</p>
						<select value={selectedAudio} onChange={handleSelectedAudio}>
							<option value="">-- Please select --</option>
							{audioUrls.map((e) => (
								<option key={e.url} value={e.url}>
									{e.quality}
								</option>
							))}
						</select>
						{selectedAudio && (
							<a
								href={selectedAudio}
								target="_blank"
								className="bg-white bg-opacity-10 px-2 py-2 rounded-lg text-white m-3 block text-center"
							>
								Download
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Download
