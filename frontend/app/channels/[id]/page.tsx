import Feed from "@/components/Feed"

// async function getChannelData(channelId: string) {
// 	const res = await fetch(
// 		`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2Csnippet%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`,
// 		{ cache: "no-store" }
// 	)
// 	return res.json()
// }

// async function getChannelVideos(channelId: string) {
// 	const maxVideos = 30
// 	const res = await fetch(
// 		`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxVideos}`,
// 		{ cache: "no-cache" }
// 	)
// 	return res.json()
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
	// const channelData = getChannelData(id)
	// const channelVideos = getChannelVideos(id)

	// const [data, videos] = await Promise.all([channelData, channelVideos])

	const data = {
		kind: "youtube#channelListResponse",
		etag: "Als6lsaZ0S7Mezg3kYYgCZiR6Es",
		pageInfo: { totalResults: 1, resultsPerPage: 5 },
		items: [
			{
				kind: "youtube#channel",
				etag: "huJuBl4nk06mcszX67uD-U0fJAQ",
				id: "UCKUOmGXE9Ytlc2EzpGqimtw",
				snippet: {
					title: "عمر عبد الكافي",
					description:
						"أهلا و سهلا بكم في القناة الرسمية لفضيلة الشيخ الدكتور عمر عبدالكافي ستجدون هنا معظم البرامج التلفزيونية و التسجيلات الخاصة و خطب الجمعة المصورة\nWelcome to Dr. Omar Abdelkafys' official YouTube Channel.\n\nHere you'll find most of Dr. Omar Abdelkafys' TV programs and video recordings.",
					customUrl: "@abdelkafytube",
					publishedAt: "2012-12-21T20:34:19Z",
					thumbnails: {
						default: {
							url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s88-c-k-c0x00ffffff-no-rj",
							width: 88,
							height: 88,
						},
						medium: {
							url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s240-c-k-c0x00ffffff-no-rj",
							width: 240,
							height: 240,
						},
						high: {
							url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s800-c-k-c0x00ffffff-no-rj",
							width: 800,
							height: 800,
						},
					},
					localized: {
						title: "عمر عبد الكافي",
						description:
							"أهلا و سهلا بكم في القناة الرسمية لفضيلة الشيخ الدكتور عمر عبدالكافي ستجدون هنا معظم البرامج التلفزيونية و التسجيلات الخاصة و خطب الجمعة المصورة\nWelcome to Dr. Omar Abdelkafys' official YouTube Channel.\n\nHere you'll find most of Dr. Omar Abdelkafys' TV programs and video recordings.",
					},
					country: "AE",
				},
				contentDetails: {
					relatedPlaylists: { likes: "", uploads: "UUKUOmGXE9Ytlc2EzpGqimtw" },
				},
				statistics: {
					viewCount: "970843260",
					subscriberCount: "8740000",
					hiddenSubscriberCount: false,
					videoCount: "3396",
				},
				brandingSettings: {
					channel: {
						title: "عمر عبد الكافي",
						description:
							"أهلا و سهلا بكم في القناة الرسمية لفضيلة الشيخ الدكتور عمر عبدالكافي ستجدون هنا معظم البرامج التلفزيونية و التسجيلات الخاصة و خطب الجمعة المصورة\nWelcome to Dr. Omar Abdelkafys' official YouTube Channel.\n\nHere you'll find most of Dr. Omar Abdelkafys' TV programs and video recordings.",
						keywords:
							'"عمر عبد الكافي" "احسن القصص عمر عبد الكافي" "الشيخ عمر عبد الكافي" "omar abdelkafy عمر عبدالكافى" "زمن الفتن عمر عبد الكافي" "الفتن عمر عبد الكافي" "omar abdelkafi" "احسن القصص" "عمر عبد الكافي قصص" "عمر عبد الكافي رمضان 2020" "زمن الفتن" "أحسن القصص عمر عبد الكافي" "الدكتور عمر عبد الكافي" "الوعد الحق عمر عبد الكافى"',
						unsubscribedTrailer: "tbhRdDKRqF4",
						country: "AE",
					},
					image: {
						bannerExternalUrl:
							"https://yt3.googleusercontent.com/sIxdHewY4qWTY60UIkfwR2ejarGNmLx_NEEWnR7E8FHmp9ojXBISCoyNzTlmCKiugQQTZ9ZL",
					},
				},
			},
		],
	}
	const videos = {
		items: [
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
		],
	}

	return (
		<div>
			{JSON.stringify(data)}
			<Feed data={videos.items} />
		</div>
	)
}

export default page
