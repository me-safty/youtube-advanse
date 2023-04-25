import { Channel } from "@/typing"
import Link from "next/link"
import Image from "next/image"

interface ChannelProps {
	channel: Channel
}

const ChannelCard = ({ channel }: ChannelProps) => (
	<div>
		<Link href={`/channels/${channel.id.channelId}`}>
			<div className="flex items-center justify-center gap-3 h-full flex-col">
				<Image
					className="w-[55%] object-cover rounded-full"
					src={channel.snippet.thumbnails.high.url}
					alt={channel.snippet.title}
					width={"480"}
					height={"360"}
				/>
				<p
					className="font-semibold my-3 overflow-hidden text-white"
					style={{
						height: "calc(2 * 1rem * 1.50)",
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: "2",
					}}
				>
					{channel.snippet.title}
				</p>
			</div>
		</Link>
	</div>
)

export default ChannelCard
