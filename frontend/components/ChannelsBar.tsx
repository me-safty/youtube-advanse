import { Channel } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface ChannelBarProps {
	channels: Channel[]
}
export const ChannelsBar = ({ channels }: ChannelBarProps) => {
	return (
		<div className="container">
			<div className="py-3 my-1 flex gap-5 overflow-x-scroll">
				{channels.map((channel) => (
					<Link
						key={channel.snippet.resourceId?.channelId}
						href={`/channels/${channel.snippet.resourceId?.channelId}/v`}
						className="	max-w-[60px]"
					>
						<div className="min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]">
							<Image
								src={channel.snippet.thumbnails.high.url}
								alt="channel image"
								width={50}
								height={50}
								className=" rounded-full w-full h-full object-cover"
							/>
						</div>
						<p
							className="my-1 overflow-hidden text-gray-500 text-xs text-center"
							style={{
								height: "calc(1 * 1rem * 1)",
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: "1",
							}}
						>
							{channel.snippet.title}
						</p>
					</Link>
				))}
			</div>
		</div>
	)
}
