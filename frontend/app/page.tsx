import { Video } from "@/typing"
import subscriptions, { feed, subs } from "@/lib/subscriptions"
import SubscriptionsFeed from "@/components/SubscriptionsFeed"
import { ChannelsBar } from "@/components/ChannelsBar"
import convertRelativeDateToMIleSeconds from "@/lib/convertRelativeDateToISODate"

// async function getData() {
// 	try {
// 		const channelIds = [
// 			"UCKUOmGXE9Ytlc2EzpGqimtw",
// 			"UCCy0qwIz722Gi2MtjYlrQeg",
// 			"UCEHvaZ336u7TIsUQ2c6SAeQ",
// 		]
// 		const requests = channelIds.map((id) =>
// 			fetch(`https://yt-api.p.rapidapi.com/channel/videos?id=${id}`, {
// 				next: { revalidate: 7000 },
// 				method: "GET",
// 				// @ts-ignore
// 				headers: {
// 					// "content-type": "application/octet-stream",
// 					"X-RapidAPI-Key": process.env.RAPID_API_KEY,
// 					"X-RapidAPI-Host": "yt-api.p.rapidapi.com",
// 				},
// 			})
// 		)

// 		Promise.all(requests)
// 			.then((responses) =>
// 				Promise.all(responses.map((response) => response.json()))
// 			)
// 			.then((data) => {
// 				console.log(data)
// 				return data
// 			})
// 			.catch((error) => {
// 				console.error(error)
// 			})
// 	} catch (e) {
// 		console.log(e)
// 	}

// 	// const maxVideos = 10
// 	// const res = await fetch(
// 	// 	`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxVideos}`,
// 	// 	{ next: { revalidate: 6600 } }
// 	// )
// }

async function getData(channelId: string) {
	try {
		const res = await fetch(
			// `https://yt-api.p.rapidapi.com/channel/videos?id=${channelId}`,
			`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelId}`,
			{
				next: { revalidate: 3600 },
				method: "GET",
				// @ts-ignore
				headers: {
					// "content-type": "application/octet-stream",
					"X-RapidAPI-Key": process.env.RAPID_API_KEY,
					"X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
					// "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
					// "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
				},
			}
		)
		return res.json()
	} catch (e) {
		console.log(e)
	}
}

const demoVideos: Video[] = [
	{
		id: {
			kind: "youtube#video",
			videoId: "e0ccuvyVQpU",
		},
		snippet: {
			publishedAt: "2023-04-23T18:00:13Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "فضل صيام 6 من شوال",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/e0ccuvyVQpU/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/e0ccuvyVQpU/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/e0ccuvyVQpU/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "7ONdj8iV7zk",
		},
		snippet: {
			publishedAt: "2023-04-22T17:00:07Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "حواري مع أحفادي , حفيدي يصف لي الجنة كما يتخيلها",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/7ONdj8iV7zk/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/7ONdj8iV7zk/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/7ONdj8iV7zk/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "su3Qwu12ZZo",
		},
		snippet: {
			publishedAt: "2023-04-20T18:15:04Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "عيدنا الحقيقي",
			description: "",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/su3Qwu12ZZo/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/su3Qwu12ZZo/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/su3Qwu12ZZo/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "jir8CsFLoAE",
		},
		snippet: {
			publishedAt: "2023-04-20T15:00:29Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "الوعد الحق الجزء الثاني (28) | أخذ الحقوق",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/jir8CsFLoAE/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/jir8CsFLoAE/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/jir8CsFLoAE/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "_oihvEAi664",
		},
		snippet: {
			publishedAt: "2023-04-19T15:00:33Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "الوعد الحق الجزء الثاني (27) | الذين يظلهم الله في ظله",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/_oihvEAi664/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/_oihvEAi664/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/_oihvEAi664/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "cCRpGJtQxU4",
		},
		snippet: {
			publishedAt: "2023-04-18T19:00:14Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "لماذا لا تصلي؟",
			description: "",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/cCRpGJtQxU4/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/cCRpGJtQxU4/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/cCRpGJtQxU4/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "b_YMRJSqU4I",
		},
		snippet: {
			publishedAt: "2023-04-18T15:00:21Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "الوعد الحق الجزء الثاني (26) | هل يقبل الله الأعذار؟",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/b_YMRJSqU4I/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/b_YMRJSqU4I/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/b_YMRJSqU4I/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
	{
		id: {
			kind: "youtube#video",
			videoId: "boawx8Frhuw",
		},
		snippet: {
			publishedAt: "2023-04-17T15:00:21Z",
			channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
			title: "دعاء ليلة القدر 1444/2023 عمر عبد الكافي",
			description:
				"أهلا بكم في القناة الرسمية لفضيلة الشيخ د. عمر عبد الكافي، لمتابعة كل جديد يرجي الأشتراك في القناة و تفعيل زر الجرس.",
			thumbnails: {
				default: {
					url: "https://i.ytimg.com/vi/boawx8Frhuw/default.jpg",
					width: 120,
					height: 90,
				},
				medium: {
					url: "https://i.ytimg.com/vi/boawx8Frhuw/mqdefault.jpg",
					width: 320,
					height: 180,
				},
				high: {
					url: "https://i.ytimg.com/vi/boawx8Frhuw/hqdefault.jpg",
					width: 480,
					height: 360,
				},
			},
			channelTitle: "عمر عبد الكافي",
		},
	},
]

export default async function Home() {
	const subscriptionsData = subs.map((sub) => getData(sub.id))
	const data = await Promise.all(subscriptionsData)
	// const channels = subscriptions.map((e) => e.meta)
	// const videos = subscriptions
	const videos = data
		.map((e) => e.data.slice(0, 3))
		.flat()
		.sort(
			(a, b) =>
				convertRelativeDateToMIleSeconds(b.publishedText) -
				convertRelativeDateToMIleSeconds(a.publishedText)
		)
	console.log(videos)
	return (
		<>
			{/* {JSON.stringify(videos, null, 2)} */}
			{/* @ts-ignore */}
			<ChannelsBar channels={feed.items} />
			{/* @ts-ignore */}
			<SubscriptionsFeed videos={videos} />
		</>
	)
}
