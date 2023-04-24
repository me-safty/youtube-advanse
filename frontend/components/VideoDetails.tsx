"use client"

import { VideoDetails } from "@/typing"
import Link from "next/link"
import { useState } from "react"

interface VideoDetailsPageProps {
  videoDetails: VideoDetails
  id: string
}

const VideoDetailsPage = ({ videoDetails, id }: VideoDetailsPageProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(false)

  return (
    <div>
      <div className="w-full aspect-w-16 h-[700px] mt-5">
        <iframe
          className="w-full h-[700px]"
          src={`https://www.youtube.com/embed/${id}`}
          title={"video_title"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-4 text-white">
        <h1 className="text-white text-3xl my-5">
          {videoDetails.items[0].snippet.title}
        </h1>
        <Link href={`/channels/${videoDetails.items[0].snippet.channelId}`}>
          <h2 className="my-3 text-gray-500 text-xl">
            {videoDetails.items[0].snippet.channelTitle}
          </h2>
        </Link>
        <div className="p-4 rounded-xl bg-white bg-opacity-5">
          <p className="text-gray-400 mb-2 text-sm font-semibold">
            {new Date(
              videoDetails.items[0].snippet.publishedAt
            ).toLocaleString()}
            <span className="">
              {" | "}
              {Number(
                videoDetails.items[0].statistics.viewCount
              ).toLocaleString()}{" "}
              views
            </span>
            <span className="span">
              {" | "}
              {Number(
                videoDetails.items[0].statistics.likeCount
              ).toLocaleString()}{" "}
              likes
            </span>
          </p>
          <p
            className="overflow-hidden"
            style={
              isExpanded === false
                ? {
                    height: "calc(3} * 1rem * 1.50)",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }
                : {}
            }
          >
            {videoDetails.items[0].snippet.description}
          </p>
          <button
            className="text-cyan-700"
            onClick={() => setExpanded((p) => !p)}
          >
            view more
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetailsPage
