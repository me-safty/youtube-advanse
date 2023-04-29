import Feed from "@/components/Feed"
import { notFound } from "next/navigation"

async function getData(searchQuery: string) {
	const maxVideos = 35
	const res = await fetch(
		// `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxVideos}&q=${searchQuery}&key=${process.env.YOUTUBE_API_KEY}`,
		`https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet&maxResults=${maxVideos}&order=date`,
		{
			cache: "no-store",
			method: "GET",
			//@ts-ignore
			headers: {
				"content-type": "application/octet-stream",
				"X-RapidAPI-Key": process.env.RAPID_API_KEY,
				"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
			},
		}
	)
	return res.json()
}

export default async function Page({
	params: { searchQuery },
}: {
	params: { searchQuery: string }
}) {
	const data = await getData(searchQuery)
	if (!data.items[0]) return notFound()
	return (
		<div className="">
			<Feed data={data?.items} />
		</div>
	)
}
