"use Client"
import React from "react"
import dynamic from "next/dynamic"
// @ts-ignore
const ReactPlayer = dynamic(() => import("react-player"), {
  // ssr: false,
})

// async function getData(videoId: string) {
//   const res = await fetch(
//     `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
//     {
//       cache: "no-store",
//       method: "GET",
//       // @ts-ignore
//       headers: {
//         "content-type": "application/octet-stream",
//         "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//         "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//       },
//     }
//   )

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data")
//   }

//   return res.json()
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
  //   const videoDetails = await getData(id)

  return (
    <div className="container">
      <div className="w-full aspect-w-16 ">
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls={true}
          width="100%"
          height="auto"
        /> */}

        <iframe
          className="w-full h-[700px]"
          src={`https://www.youtube.com/embed/${id}`}
          title={"video_title"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default page
