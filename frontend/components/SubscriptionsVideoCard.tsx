import getRelativeTime from "@/lib/getRelativeTime"
import { ChannelSubscriptionsCard, VideoSubscriptionsCard } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface SubscriptionsVideoCardProps {
	video: VideoSubscriptionsCard
	// channel: ChannelSubscriptionsCard
}

const SubscriptionsVideoCard = ({
	video,
}: // channel,
SubscriptionsVideoCardProps) => {
	return (
		<div className="w-full">
			<Link href={`/videos/${video.videoId}`} className="relative">
				<Image
					className="w-full object-cover h-[50vw] sm:h-[13vw] lg:h-[11vw]  rounded-xl"
					src={video.thumbnail[3].url}
					alt={video.title}
					width={video.thumbnail[3].width || "480"}
					height={video.thumbnail[3].height || "360"}
				/>
				<div className="py-1 px-2 rounded-md absolute bottom-2 left-2 bg-black bg-opacity-50">
					<p className="text-white text-xs font-semibold">{video.lengthText}</p>
				</div>
			</Link>
			<div className="flex gap-1 flex-row-reverse">
				{/* <Link
					href={`/channels/${channel.channelId}/v`}
					className="min-w-[3vw] min-h-[3vw] max-w-[3vw] max-h-[3vw]"
				>
					<Image
						className="object-cover w-full h-full my-2 rounded-full"
						src={channel.avatar[2].url}
						alt="channel avatar"
						width={channel.avatar[2].width || "480"}
						height={channel.avatar[2].height || "360"}
					/>
				</Link> */}
				<div className="flex-1">
					<Link href={`/videos/${video.videoId}`}>
						<p
							className="font-semibold my-1 overflow-hidden text-white"
							style={{
								// height: "calc(2 * 1rem * 1.50)",
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: "2",
							}}
						>
							{video.title}
						</p>
					</Link>
					{/* <Link href={`/channels/${channel.channelId}/v`}>
						<p
							className="text-sm my-1 overflow-hidden text-gray-400"
							style={{
								height: "calc(1 * 1rem * 1.25)",
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: "1",
							}}
						>
							{channel.title}
						</p>
					</Link> */}
					<p className="text-sm my-1 text-gray-400">
						{video.publishedAt
							? getRelativeTime(video.publishedAt)
							: video.publishedText}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SubscriptionsVideoCard
