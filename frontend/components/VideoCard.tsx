import { Video } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface VideoCardProps {
	video: Video
}

const VideoCard = ({ video }: VideoCardProps) => {
	return (
		<div className="w-full">
			<Link href={`/videos/${video.id.videoId}`}>
				<Image
					className="w-full object-cover"
					src={video.snippet.thumbnails.high.url}
					alt={video.snippet.title}
					width={video.snippet.thumbnails.high.width || "480"}
					height={video.snippet.thumbnails.high.height || "360"}
				/>
				<p
					className="font-semibold my-1 overflow-hidden text-white"
					style={{
						height: "calc(2 * 1rem * 1.50)",
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "2",
					}}
				>
					{video.snippet.title}
				</p>
			</Link>
			<Link href={`/channels/${video.snippet.channelId}`}>
				<p
					className="font-semibold text-sm my-1 overflow-hidden text-gray-400"
					style={{
						height: "calc(1 * 1rem * 1.25)",
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "1",
					}}
				>
					{video.snippet.channelTitle}
				</p>
			</Link>
		</div>
	)
}

export default VideoCard
