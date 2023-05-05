import { Channel } from "@/typing"
import Image from "next/image"
import Link from "next/link"

interface ChannelBarProps {
	channels: Channel[]
}
export const ChannelsBar = ({ channels }: ChannelBarProps) => {
	return (
		<div className="container">
			<div
				style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f1f1f1" }}
				className="py-3 my-1 flex gap-3 overflow-x-scroll [scrollbar-width:5px] [scrollbar-color:#888]"
			>
				{channels.map((channel) => (
					<Link
						// @ts-ignore
						key={channel.snippet.resourceId.channelId as unknown as string}
						// @ts-ignore
						href={`/channels/${channel.snippet.resourceId.channelId}/v`}
						className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]"
					>
						<Image
							src={channel.snippet.thumbnails.high.url}
							alt="channel image"
							width={50}
							height={50}
							className=" rounded-full w-full h-full object-cover"
						/>
					</Link>
				))}
			</div>
		</div>
	)
}
