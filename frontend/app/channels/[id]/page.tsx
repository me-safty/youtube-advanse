import ChannelPage from "@/components/ChannelPage"
import Feed from "@/components/Feed"
import { notFound } from "next/navigation"

// async function getChannelData(channelId: string) {
// 	const res = await fetch(
// 		`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2Csnippet%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`,
// 		{ next: { revalidate: 1000 } }
// 	)
// 	return res.json()
// }

// async function getChannelVideos(channelId: string) {
// 	const maxVideos = 30
// 	const res = await fetch(
// 		`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxVideos}`,
// 		{ next: { revalidate: 1000 } }
// 	)
// 	return res.json()
// }

// async function getChannelPlaylists(channelId: string) {
// 	const maxNum = 30
// 	const res = await fetch(
// 		`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer%2CcontentDetails&channelId=${channelId}&maxResults=${maxNum}&key=${process.env.YOUTUBE_API_KEY}`,
// 		// `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxVideos}`,
// 		{ next: { revalidate: 1000 } }
// 	)
// 	return res.json()
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
	// const channelVideos = getChannelVideos(id)
	// const channelPlaylists = getChannelPlaylists(id)
	// const channelData = getChannelData(id)
	// const [videos, playlists, data] = await Promise.all([
	// 	channelVideos,
	// 	channelPlaylists,
	// 	channelData,
	// ])
	// if (!videos.items[0] || !playlists.items[0] || !data.items[0])
	// 	return notFound()

	const data = {
		kind: "youtube#channelListResponse",
		etag: "Als6lsaZ0S7Mezg3kYYgCZiR6Es",
		pageInfo: { totalResults: 1, resultsPerPage: 5 },
		items: [
			{
				kind: "youtube#channel",
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
				},
				contentDetails: {
					relatedPlaylists: { likes: "", uploads: "UUKUOmGXE9Ytlc2EzpGqimtw" },
				},
				statistics: {
					viewCount: "970843260",
					subscriberCount: "8740000",
					videoCount: "3396",
				},
				brandingSettings: {
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

	const playlists = {
		kind: "youtube#playlistListResponse",
		etag: "0OWK_GHli1vGxgdTPzChLhI-g6E",
		nextPageToken: "CAUQAA",
		pageInfo: {
			totalResults: 62,
			resultsPerPage: 5,
		},
		items: [
			{
				kind: "youtube#playlist",
				etag: "wN5qJoRuBa0z7jz6AQyYU4JLtwQ",
				id: "PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu",
				snippet: {
					publishedAt: "2023-03-22T13:33:11Z",
					channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
					title: 'برنامج "الوعد الحق 2" رمضان 2023',
					description: "",
					thumbnails: {
						default: {
							url: "https://i.ytimg.com/vi/VFNumPUAAUA/default.jpg",
							width: 120,
							height: 90,
						},
						medium: {
							url: "https://i.ytimg.com/vi/VFNumPUAAUA/mqdefault.jpg",
							width: 320,
							height: 180,
						},
						high: {
							url: "https://i.ytimg.com/vi/VFNumPUAAUA/hqdefault.jpg",
							width: 480,
							height: 360,
						},
						standard: {
							url: "https://i.ytimg.com/vi/VFNumPUAAUA/sddefault.jpg",
							width: 640,
							height: 480,
						},
						maxres: {
							url: "https://i.ytimg.com/vi/VFNumPUAAUA/maxresdefault.jpg",
							width: 1280,
							height: 720,
						},
					},
					channelTitle: "عمر عبد الكافي",
					localized: {
						title: 'برنامج "الوعد الحق 2" رمضان 2023',
						description: "",
					},
				},
				contentDetails: {
					itemCount: 30,
				},
				player: {
					embedHtml:
						'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
				},
			},
			{
				kind: "youtube#playlist",
				etag: "ma21UA95-pJr7xYGKKIQz0KBcKs",
				id: "PL7PzPXcv-qiweRDF3oCRq-EeubRyK3DO0",
				snippet: {
					publishedAt: "2022-09-12T21:23:48Z",
					channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
					title: "أذكار الصباح و المساء",
					description: "",
					thumbnails: {
						default: {
							url: "https://i.ytimg.com/vi/5sY9by_z6YE/default.jpg",
							width: 120,
							height: 90,
						},
						medium: {
							url: "https://i.ytimg.com/vi/5sY9by_z6YE/mqdefault.jpg",
							width: 320,
							height: 180,
						},
						high: {
							url: "https://i.ytimg.com/vi/5sY9by_z6YE/hqdefault.jpg",
							width: 480,
							height: 360,
						},
						standard: {
							url: "https://i.ytimg.com/vi/5sY9by_z6YE/sddefault.jpg",
							width: 640,
							height: 480,
						},
						maxres: {
							url: "https://i.ytimg.com/vi/5sY9by_z6YE/maxresdefault.jpg",
							width: 1280,
							height: 720,
						},
					},
					channelTitle: "عمر عبد الكافي",
					localized: {
						title: "أذكار الصباح و المساء",
						description: "",
					},
				},
				contentDetails: {
					itemCount: 2,
				},
				player: {
					embedHtml:
						'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qiweRDF3oCRq-EeubRyK3DO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
				},
			},
			{
				kind: "youtube#playlist",
				etag: "KglijM4bE6EVjqplWZ8AnXsK18E",
				id: "PL7PzPXcv-qiwfCq1nCbu9rafHFQH3liaX",
				snippet: {
					publishedAt: "2022-08-26T14:32:32Z",
					channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
					title: "أسئلة و أجوبة مع الدكتور عمر عبد الكافي",
					description: "",
					thumbnails: {
						default: {
							url: "https://i.ytimg.com/vi/MGKIeipalQ8/default.jpg",
							width: 120,
							height: 90,
						},
						medium: {
							url: "https://i.ytimg.com/vi/MGKIeipalQ8/mqdefault.jpg",
							width: 320,
							height: 180,
						},
						high: {
							url: "https://i.ytimg.com/vi/MGKIeipalQ8/hqdefault.jpg",
							width: 480,
							height: 360,
						},
						standard: {
							url: "https://i.ytimg.com/vi/MGKIeipalQ8/sddefault.jpg",
							width: 640,
							height: 480,
						},
						maxres: {
							url: "https://i.ytimg.com/vi/MGKIeipalQ8/maxresdefault.jpg",
							width: 1280,
							height: 720,
						},
					},
					channelTitle: "عمر عبد الكافي",
					localized: {
						title: "أسئلة و أجوبة مع الدكتور عمر عبد الكافي",
						description: "",
					},
				},
				contentDetails: {
					itemCount: 27,
				},
				player: {
					embedHtml:
						'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qiwfCq1nCbu9rafHFQH3liaX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
				},
			},
			{
				kind: "youtube#playlist",
				etag: "kq12JFxlY5bJ7zlZEzAHkIQXybQ",
				id: "PL7PzPXcv-qizJIzhZGoLssVQuQJUstoAn",
				snippet: {
					publishedAt: "2022-04-29T14:37:31Z",
					channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
					title: "أدعية ليلة القدر مع الشيخ عمر عبد الكافي",
					description: "",
					thumbnails: {
						default: {
							url: "https://i.ytimg.com/vi/GtlMWXMLEN0/default.jpg",
							width: 120,
							height: 90,
						},
						medium: {
							url: "https://i.ytimg.com/vi/GtlMWXMLEN0/mqdefault.jpg",
							width: 320,
							height: 180,
						},
						high: {
							url: "https://i.ytimg.com/vi/GtlMWXMLEN0/hqdefault.jpg",
							width: 480,
							height: 360,
						},
						standard: {
							url: "https://i.ytimg.com/vi/GtlMWXMLEN0/sddefault.jpg",
							width: 640,
							height: 480,
						},
						maxres: {
							url: "https://i.ytimg.com/vi/GtlMWXMLEN0/maxresdefault.jpg",
							width: 1280,
							height: 720,
						},
					},
					channelTitle: "عمر عبد الكافي",
					localized: {
						title: "أدعية ليلة القدر مع الشيخ عمر عبد الكافي",
						description: "",
					},
				},
				contentDetails: {
					itemCount: 8,
				},
				player: {
					embedHtml:
						'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qizJIzhZGoLssVQuQJUstoAn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
				},
			},
			{
				kind: "youtube#playlist",
				etag: "qK57y-mKiBAuEHjZJTvq1qX7ni8",
				id: "PL7PzPXcv-qizbp9_3NlR5i5lrQK-E7FRM",
				snippet: {
					publishedAt: "2022-04-27T13:32:00Z",
					channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
					title: "دعاء",
					description: "",
					thumbnails: {
						default: {
							url: "https://i.ytimg.com/img/no_thumbnail.jpg",
							width: 120,
							height: 90,
						},
						medium: {
							url: "https://i.ytimg.com/img/no_thumbnail.jpg",
							width: 320,
							height: 180,
						},
						high: {
							url: "https://i.ytimg.com/img/no_thumbnail.jpg",
							width: 480,
							height: 360,
						},
					},
					channelTitle: "عمر عبد الكافي",
					localized: {
						title: "دعاء",
						description: "",
					},
				},
				contentDetails: {
					itemCount: 0,
				},
				player: {
					embedHtml:
						'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qizbp9_3NlR5i5lrQK-E7FRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
				},
			},
		],
	}

	return (
		<div>
			{/* @ts-ignore */}
			{/* <ChannelPage channel={data.items[0]} /> */}
			<Feed data={playlists.items} />
			<Feed data={videos.items} />
			{/* {JSON.stringify([...videos.items, ...playlists.items])} */}
			{/* @ts-ignore */}
		</div>
	)
}

export default page
