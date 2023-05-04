import getRelativeTime from "@/lib/getRelativeTime"
import { ChannelSubscriptionsCard, VideoSubscriptionsCard } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface SubscriptionsVideoCardProps {
	video: VideoSubscriptionsCard
	channel: ChannelSubscriptionsCard
}

const SubscriptionsVideoCard = ({
	video,
	channel,
}: SubscriptionsVideoCardProps) => {
	return (
		<div className="w-full">
			<Link href={`/videos/${video.videoId}`}>
				<Image
					className="w-full object-cover h-[50vw] sm:h-[13vw] lg:h-[11vw]  rounded-xl"
					src={video.thumbnail[3].url}
					alt={video.title}
					width={video.thumbnail[3].width || "480"}
					height={video.thumbnail[3].height || "360"}
				/>
			</Link>
			<div className="flex gap-2">
				<Image
					className="w-full object-cover h-[50vw] sm:h-[13vw] lg:h-[11vw]  rounded-xl"
					src={channel.avatar[2].url}
					alt="channel avatar"
					width={channel.avatar[2].width || "480"}
					height={channel.avatar[2].height || "360"}
				/>
				<div className="">
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
					<Link href={`/channels/${channel}/v`}>
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
					</Link>
					<p className="text-sm my-1 text-gray-400">
						{getRelativeTime(video.publishedAt)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SubscriptionsVideoCard
