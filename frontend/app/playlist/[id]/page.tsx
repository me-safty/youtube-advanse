import PlaylistPage from "@/components/PlaylistPage"

async function getData(playlistId: string) {
	const maxVideos = 35
	const res = await fetch(
		`https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${playlistId}&part=snippet&maxResults=${maxVideos}`,
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

const page = async ({ params: { id } }: { params: { id: string } }) => {
	const playlistData = await getData(id)
	return <PlaylistPage playlistVideos={playlistData.items} />
}

export default page
