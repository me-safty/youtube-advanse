import Videos from "@/components/Videos"

async function getData(searchQuery: string) {
  const maxVideos = 10
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxVideos}&q=${searchQuery}&key=${process.env.YOUTUBE_API_KEY}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Page({
  params: { searchQuery },
}: {
  params: { searchQuery: string }
}) {
  const videos = await getData(searchQuery)
  console.log(videos)

  return (
    <main className="">
      <Videos videos={videos?.items} />
      <p>{searchQuery}</p>
    </main>
  )
}
