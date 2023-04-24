import { Video } from "@/typing"
import VideoCard from "./VideoCard"

interface SubscriptionsProps {
  videos: Video[]
}

const Subscriptions = ({ videos }: SubscriptionsProps) => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
        {videos.map((videoData) => (
          <VideoCard key={videoData.id.videoId} video={videoData} />
        ))}
      </div>
    </div>
  )
}

export default Subscriptions
