import { ChannelDetails } from "@/typing"
import Image from "next/image"

interface ChannelPageProps {
	channel: ChannelDetails
}
const ChannelPage = ({ channel }: ChannelPageProps) => {
	return (
		<div className="container">
			<Image
				className="w-full h-[180px] object-cover"
				src={channel.brandingSettings.image.bannerExternalUrl}
				alt="banner image"
				width={1000}
				height={300}
			/>
			<div className="py-5 flex items-center gap-5">
				<Image
					src={channel.snippet.thumbnails.high.url}
					width={channel.snippet.thumbnails.high.width}
					height={channel.snippet.thumbnails.high.height}
					alt="channel image"
					className="w-[150px] h-[150px] rounded-full"
				/>
				<div className="">
					<h1 className="text-white text-2xl mb-2">{channel.snippet.title}</h1>
					<div className="flex items-center gap-2">
						<p className="text-gray-400 text-lg">{channel.snippet.customUrl}</p>
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
		</div>
	)
}

export default ChannelPage
