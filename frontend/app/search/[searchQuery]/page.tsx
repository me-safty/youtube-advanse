import Feed from "@/components/Feed"

async function getData(searchQuery: string) {
	const maxVideos = 35
	const res = await fetch(
		// `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxVideos}&q=${searchQuery}&key=${process.env.YOUTUBE_API_KEY}`,
		`https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet%2Cid&maxResults=${maxVideos}&order=date`,
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
	const data = await getData(searchQuery)

	return <Feed data={data?.items} />
}
