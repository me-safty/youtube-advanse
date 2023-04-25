import { PlayList } from "@/typing"
import Link from "next/link"
import Image from "next/image"

interface PlayListCardProps {
	playlist: PlayList
}
const PlayListCard = ({ playlist }: PlayListCardProps) => {
	return (
		<div>
			<Link href={`/playlist/${playlist.id.playlistId}`}>
				<div className="relative w-full">
					<Image
						className="w-full object-cover"
						src={playlist.snippet.thumbnails.high.url}
						alt={playlist.snippet.title}
						width={playlist.snippet.thumbnails.high.width || "480"}
						height={playlist.snippet.thumbnails.high.height || "360"}
					/>
					<div className="flex items-center justify-center absolute text-white top-0 left-0 w-full h-full bg-black bg-opacity-70">
						<p className=" font-semibold text-lg">playlist</p>
					</div>
				</div>
				<p
					className="font-semibold my-3 overflow-hidden text-white"
					style={{
						height: "calc(2 * 1rem * 1.50)",
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "2",
					}}
				>
					{playlist.snippet.title}
				</p>
			</Link>
			<Link href={`/channels/${playlist.snippet.channelId}`}>
				<p
					className="font-semibold text-sm my-3 overflow-hidden text-gray-400"
					style={{
						height: "calc(1 * 1rem * 1.25)",
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "1",
					}}
				>
					{playlist.snippet.channelTitle}
				</p>
			</Link>
		</div>
	)
}

export default PlayListCard