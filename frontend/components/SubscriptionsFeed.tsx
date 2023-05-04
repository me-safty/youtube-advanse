import { ChannelVideosForSubscriptions } from "@/typing"
import React from "react"
import SubscriptionsVideoCard from "./SubscriptionsVideoCard"

interface SubscriptionsFeedProps {
	channel: ChannelVideosForSubscriptions
}

const SubscriptionsFeed = ({ channel }: SubscriptionsFeedProps) => {
	return (
		<div className="">
			<div className="container">
				{channel.data.map((video) => (
					<SubscriptionsVideoCard
						key={video.videoId}
						video={video}
						channel={channel.meta}
					/>
				))}
			</div>
		</div>
	)
}

export default SubscriptionsFeed
