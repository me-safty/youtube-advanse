import VideoDetailsPage from "@/components/VideoDetails"
import { Video } from "@/typing"
import { notFound } from "next/navigation"

async function getData(videoId: string) {
	const res = await fetch(
		`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
		{
			cache: "no-store",
			method: "GET",
			// @ts-ignore
			headers: {
				"content-type": "application/octet-stream",
				"X-RapidAPI-Key": process.env.RAPID_API_KEY,
				"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
			},
		}
	)
	return res.json()
}

// const videoDetails = {
// 	items: [
// 		{
// 			kind: "youtube#video",
// 			id: "7ghhRHRP6t4",
// 			snippet: {
// 				publishedAt: "2020-07-24T04:00:10Z",
// 				channelId: "UCN1hnUccO4FD5WfM7ithXaw",
// 				title: "Maroon 5 - Nobody's Love (Official Music Video)",
// 				description:
// 					"“Nobodys Love” is out now: https://smarturl.it/NobodysLove \n\nFor more, visit: \nInstagram: https://www.instagram.com/maroon5 \nFacebook: https://www.facebook.com/maroon5 \nTwitter: https://twitter.com/maroon5 \nSign up for updates: http://smarturl.it/Maroon5.News \n\n// \n\nLYRICS \n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\nYou could make a grown man cry\nIf you ever left my side\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nBaby you’re the key to my heart locket\nIf you ever left never unlock it\nLonely like an island, island oh oh\n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love, but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna need nobody’s trust but yours, but yours\n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou could make a grown man cry, if you ever left my side\nNever let you go never let you go\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nHit me like a drug and I can’t stop it\nFit me like a glove and I cant knock it. \nI aint even lying lying oh oh \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna keep nobody’s trust but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\nNobody’s love! Oh yea \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\n#Maroon5 #NobodysLove #M5\n \nMusic video by Maroon 5 performing Nobody's Love. © 2020 Interscope Records",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/vi/7ghhRHRP6t4/default.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/vi/7ghhRHRP6t4/mqdefault.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/vi/7ghhRHRP6t4/hqdefault.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 				},
// 				channelTitle: "Maroon5VEVO",
// 			},
// 			statistics: {
// 				viewCount: "36670377",
// 				likeCount: "571656",
// 				favoriteCount: "0",
// 				commentCount: "18868",
// 			},
// 		},
// 	],
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
	const videoDetails = await getData(id)
	if (!videoDetails.items[0]) return notFound()
	return (
		<main>
			{/* @ts-ignore */}
			{/* {JSON.stringify(videoDetails)} */}
			<title>{videoDetails.items[0].snippet.title}</title>
			<VideoDetailsPage video={videoDetails.items[0]} id={id} />
		</main>
	)
}

export default page
