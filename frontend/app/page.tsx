import Feed from "@/components/Feed"
import { Video } from "@/typing"

// async function getData(channelId: string) {
//   const maxVideos = 10
//   const res = await fetch(
//     `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxVideos}`,
//     { next: { revalidate: 3600 } }
//   )

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data")
//   }

//   return res.json()
// }

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
	// UCKUOmGXE9Ytlc2EzpGqimtw
	// const data = await getData("UCKUOmGXE9Ytlc2EzpGqimtw")
	// console.log(videos)
	return <Feed data={demoVideos} />
}
