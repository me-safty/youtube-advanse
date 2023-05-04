import { ChannelVideosForSubscriptions, VideoSubscriptionsCard } from "@/typing"
import React from "react"
import SubscriptionsVideoCard from "./SubscriptionsVideoCard"

interface SubscriptionsFeedProps {
	// channel: ChannelVideosForSubscriptions
	videos: VideoSubscriptionsCard[]
}

const SubscriptionsFeed = ({ videos }: SubscriptionsFeedProps) => {
	return (
		<div className="">
			<div className="container">
				<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 w-full">
					{videos.map((video) => (
						<SubscriptionsVideoCard
							key={video.videoId}
							video={video}
							// channel={channel.meta}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default SubscriptionsFeed
