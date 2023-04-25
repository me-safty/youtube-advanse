import { Channel, PlayList, Video } from "@/typing"
import VideoCard from "./VideoCard"
import PlayListCard from "./PlayListCard"
import ChannelCard from "./ChannelCard"

interface FeedProps {
	data: Video[] | PlayList[] | Channel[]
}

const Videos = ({ data }: FeedProps) => {
	console.log(data)
	return (
		<div className="container">
			<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
				{data.map((d) =>
					d.id.kind === "youtube#video" ? (
						<VideoCard key={d.id.videoId} video={d as Video} />
					) : d.id.kind === "youtube#playlist" ? (
						<PlayListCard key={d.id.playlistId} playlist={d as PlayList} />
					) : d.id.kind === "youtube#channel" ? (
						<ChannelCard key={d.id.channelId} channel={d as Channel} />
					) : undefined
				)}
			</div>
		</div>
	)
}

export default Videos