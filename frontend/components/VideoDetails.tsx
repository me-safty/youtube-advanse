"use client"

import { Video } from "@/typing"
import Link from "next/link"
import { useState } from "react"

interface VideoDetailsPageProps {
	video: Video
	id: string
}

const VideoDetailsPage = ({ video, id }: VideoDetailsPageProps) => {
	const [isExpanded, setExpanded] = useState<boolean>(false)
	return (
		<div className="">
			<iframe
				className="w-full h-[50vw]"
				src={`https://www.youtube.com/embed/${id}`}
				title={"video_title"}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<div className="container">
				<div className="mx-4 text-white">
					<h1 className="text-white text-3xl my-5">{video.snippet.title}</h1>
					<Link href={`/channels/${video.snippet.channelId}`}>
						<h2 className="my-3 text-gray-500 text-xl inline-block">
							{video.snippet.channelTitle}
						</h2>
					</Link>
					<div className="p-4 rounded-xl bg-white bg-opacity-5">
						<Link href={`/download/${id}`}>
							<div className="py-2 px-3 bg-white bg-opacity-10 w-fit rounded-lg mb-3">
								<p className="">Download</p>
							</div>
						</Link>
						<p className="text-gray-400 mb-2 text-sm font-semibold">
							{new Date(video.snippet.publishedAt).toLocaleString()}
							<span className="">
								{" | "}
								{Number(video?.statistics?.viewCount).toLocaleString()} views
							</span>
							<span className="span">
								{" | "}
								{Number(video?.statistics?.likeCount).toLocaleString()} likes
							</span>
						</p>
						<p
							className="overflow-hidden"
							style={
								isExpanded === false
									? {
											height: "calc(3} * 1rem * 1.50)",
											display: "-webkit-box",
											WebkitBoxOrient: "vertical",
											WebkitLineClamp: 3,
									  }
									: {}
							}
						>
							{video.snippet.description}
						</p>
						<button
							className="text-cyan-700"
							onClick={() => setExpanded((p) => !p)}
						>
							view more
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetailsPage
