import { ChannelDetails } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface ChannelPageProps {
	channel: ChannelDetails
}
const ChannelPage = ({ channel }: ChannelPageProps) => {
	return (
		<div className="">
			{channel.brandingSettings.image && (
				<Image
					className="w-full h-[15.5vw] object-cover"
					src={channel.brandingSettings.image.bannerExternalUrl}
					alt="banner image"
					width={1000}
					height={300}
				/>
			)}
			<div className="container">
				<div className="py-5 flex items-center gap-5 flex-col sm:flex-row">
					<Image
						src={channel.snippet.thumbnails.high.url}
						width={channel.snippet.thumbnails.high.width}
						height={channel.snippet.thumbnails.high.height}
						alt="channel image"
						className="w-[150px] h-[150px] rounded-full"
					/>
					<div className="">
						<h1 className="text-white text-2xl mb-2">
							{channel.snippet.title}
						</h1>
						<div className="flex items-center gap-2">
							<p className="text-gray-400 text-lg">
								{channel.snippet.customUrl}
							</p>
							<p className="text-gray-400 text-lg">
								{Number(channel.statistics.subscriberCount).toLocaleString()}{" "}
								Subscription
							</p>
							<p className="text-gray-400 text-lg">
								{Number(channel.statistics.videoCount).toLocaleString()} Video
							</p>
						</div>
						<p
							className="overflow-hidden text-lg text-gray-400 [direction]:[rtl]"
							style={{
								height: "calc(1 * 1rem * 1.75)",
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: "1",
							}}
						>
							{channel.snippet.description}
						</p>
					</div>
				</div>
				{/* <iframe
				width="640"
				height="360"
				src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu"
				allow=" accelerometer; autoplay; clipboard-write;
				encrypted-media; gyroscope; picture-in-picture;"
				allowfullscreen
			></iframe> */}
				<div className="text-white my-1 flex gap-1">
					<Link href={`/channels/${channel.id}/v`}>
						<button className="bg-white bg-opacity-5 px-2 py-1 rounded-lg">
							videos
						</button>
					</Link>
					<Link href={`/channels/${channel.id}/p`}>
						<button className="bg-white bg-opacity-5 px-2 py-1 rounded-lg">
							playlists
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ChannelPage
