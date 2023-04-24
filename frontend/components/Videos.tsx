import { Video } from "@/typing"
import VideoCard from "./VideoCard"

interface VideosProps {
  videos: Video[]
}

const Videos = ({ videos }: VideosProps) => {
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

export default Videos
