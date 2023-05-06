import getRelativeTime from "@/lib/getRelativeTime"
import { Video } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface PlaylistPageProps {
	playlistVideos: Video[]
}

const PlaylistPage = ({ playlistVideos }: PlaylistPageProps) => {
	return (
		<div className="my-5">
			<div className="container flex flex-col gap-5">
				{playlistVideos.map((video) => (
					<div className="flex items-center gap-5" key={video.id.videoId}>
						<Link
							href={`/videos/${video.snippet.resourceId?.videoId}`}
							className="h-[90px] min-w-[160px] max-w-[160px] min-h-[90px] max-h-[90px] sm:min-w-[23vw] sm:min-h-[12vw] sm:max-w-[23vw] sm:max-h-[12vw]"
						>
							<Image
								className="object-cover rounded-xl w-full h-full"
								src={video.snippet.thumbnails.high.url}
								alt={video.snippet.title}
								width={"480"}
								height={"360"}
							/>
						</Link>
						<div className=" flex flex-col justify-center">
							<Link href={`/videos/${video.snippet.resourceId?.videoId}`}>
								<p
									className="font-semibold my-1 overflow-hidden text-white text-sm sm:text-base"
									style={{
										// height: "calc(2 * 1rem * 1.50)",
										display: "-webkit-box",
										WebkitBoxOrient: "vertical",
										WebkitLineClamp: "2",
									}}
								>
									{video.snippet.title}
								</p>
							</Link>
							<Link href={`/channels/${video.snippet.channelId}/v`}>
								<p
									className="text-sm sm:my-1 overflow-hidden text-gray-400"
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
							<p className="text-sm text-gray-400">
								{getRelativeTime(video.snippet.publishedAt)}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PlaylistPage
