import Feed from "@/components/Feed"
import { notFound } from "next/navigation"

async function getChannelPlaylists(channelId: string) {
	const maxNum = 8
	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer%2CcontentDetails&channelId=${channelId}&maxResults=${maxNum}&key=${process.env.YOUTUBE_API_KEY}`,
		{ next: { revalidate: 1000 } }
	)
	return res.json()
}

// const channelPlaylists = {
// 	kind: "youtube#playlistListResponse",
// 	etag: "0OWK_GHli1vGxgdTPzChLhI-g6E",
// 	nextPageToken: "CAUQAA",
// 	pageInfo: {
// 		totalResults: 62,
// 		resultsPerPage: 5,
// 	},
// 	items: [
// 		{
// 			kind: "youtube#playlist",
// 			etag: "wN5qJoRuBa0z7jz6AQyYU4JLtwQ",
// 			id: "PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu",
// 			snippet: {
// 				publishedAt: "2023-03-22T13:33:11Z",
// 				channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 				title: 'برنامج "الوعد الحق 2" رمضان 2023',
// 				description: "",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/vi/VFNumPUAAUA/default.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/vi/VFNumPUAAUA/mqdefault.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/vi/VFNumPUAAUA/hqdefault.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 					standard: {
// 						url: "https://i.ytimg.com/vi/VFNumPUAAUA/sddefault.jpg",
// 						width: 640,
// 						height: 480,
// 					},
// 					maxres: {
// 						url: "https://i.ytimg.com/vi/VFNumPUAAUA/maxresdefault.jpg",
// 						width: 1280,
// 						height: 720,
// 					},
// 				},
// 				channelTitle: "عمر عبد الكافي",
// 				localized: {
// 					title: 'برنامج "الوعد الحق 2" رمضان 2023',
// 					description: "",
// 				},
// 			},
// 			contentDetails: {
// 				itemCount: 30,
// 			},
// 			player: {
// 				embedHtml:
// 					'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qixZCAGXILiGlYOP8HrDhqhu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
// 			},
// 		},
// 		{
// 			kind: "youtube#playlist",
// 			etag: "ma21UA95-pJr7xYGKKIQz0KBcKs",
// 			id: "PL7PzPXcv-qiweRDF3oCRq-EeubRyK3DO0",
// 			snippet: {
// 				publishedAt: "2022-09-12T21:23:48Z",
// 				channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 				title: "أذكار الصباح و المساء",
// 				description: "",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/vi/5sY9by_z6YE/default.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/vi/5sY9by_z6YE/mqdefault.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/vi/5sY9by_z6YE/hqdefault.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 					standard: {
// 						url: "https://i.ytimg.com/vi/5sY9by_z6YE/sddefault.jpg",
// 						width: 640,
// 						height: 480,
// 					},
// 					maxres: {
// 						url: "https://i.ytimg.com/vi/5sY9by_z6YE/maxresdefault.jpg",
// 						width: 1280,
// 						height: 720,
// 					},
// 				},
// 				channelTitle: "عمر عبد الكافي",
// 				localized: {
// 					title: "أذكار الصباح و المساء",
// 					description: "",
// 				},
// 			},
// 			contentDetails: {
// 				itemCount: 2,
// 			},
// 			player: {
// 				embedHtml:
// 					'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qiweRDF3oCRq-EeubRyK3DO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
// 			},
// 		},
// 		{
// 			kind: "youtube#playlist",
// 			etag: "KglijM4bE6EVjqplWZ8AnXsK18E",
// 			id: "PL7PzPXcv-qiwfCq1nCbu9rafHFQH3liaX",
// 			snippet: {
// 				publishedAt: "2022-08-26T14:32:32Z",
// 				channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 				title: "أسئلة و أجوبة مع الدكتور عمر عبد الكافي",
// 				description: "",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/vi/MGKIeipalQ8/default.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/vi/MGKIeipalQ8/mqdefault.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/vi/MGKIeipalQ8/hqdefault.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 					standard: {
// 						url: "https://i.ytimg.com/vi/MGKIeipalQ8/sddefault.jpg",
// 						width: 640,
// 						height: 480,
// 					},
// 					maxres: {
// 						url: "https://i.ytimg.com/vi/MGKIeipalQ8/maxresdefault.jpg",
// 						width: 1280,
// 						height: 720,
// 					},
// 				},
// 				channelTitle: "عمر عبد الكافي",
// 				localized: {
// 					title: "أسئلة و أجوبة مع الدكتور عمر عبد الكافي",
// 					description: "",
// 				},
// 			},
// 			contentDetails: {
// 				itemCount: 27,
// 			},
// 			player: {
// 				embedHtml:
// 					'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qiwfCq1nCbu9rafHFQH3liaX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
// 			},
// 		},
// 		{
// 			kind: "youtube#playlist",
// 			etag: "kq12JFxlY5bJ7zlZEzAHkIQXybQ",
// 			id: "PL7PzPXcv-qizJIzhZGoLssVQuQJUstoAn",
// 			snippet: {
// 				publishedAt: "2022-04-29T14:37:31Z",
// 				channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 				title: "أدعية ليلة القدر مع الشيخ عمر عبد الكافي",
// 				description: "",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/vi/GtlMWXMLEN0/default.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/vi/GtlMWXMLEN0/mqdefault.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/vi/GtlMWXMLEN0/hqdefault.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 					standard: {
// 						url: "https://i.ytimg.com/vi/GtlMWXMLEN0/sddefault.jpg",
// 						width: 640,
// 						height: 480,
// 					},
// 					maxres: {
// 						url: "https://i.ytimg.com/vi/GtlMWXMLEN0/maxresdefault.jpg",
// 						width: 1280,
// 						height: 720,
// 					},
// 				},
// 				channelTitle: "عمر عبد الكافي",
// 				localized: {
// 					title: "أدعية ليلة القدر مع الشيخ عمر عبد الكافي",
// 					description: "",
// 				},
// 			},
// 			contentDetails: {
// 				itemCount: 8,
// 			},
// 			player: {
// 				embedHtml:
// 					'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qizJIzhZGoLssVQuQJUstoAn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
// 			},
// 		},
// 		{
// 			kind: "youtube#playlist",
// 			etag: "qK57y-mKiBAuEHjZJTvq1qX7ni8",
// 			id: "PL7PzPXcv-qizbp9_3NlR5i5lrQK-E7FRM",
// 			snippet: {
// 				publishedAt: "2022-04-27T13:32:00Z",
// 				channelId: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 				title: "دعاء",
// 				description: "",
// 				thumbnails: {
// 					default: {
// 						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
// 						width: 120,
// 						height: 90,
// 					},
// 					medium: {
// 						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
// 						width: 320,
// 						height: 180,
// 					},
// 					high: {
// 						url: "https://i.ytimg.com/img/no_thumbnail.jpg",
// 						width: 480,
// 						height: 360,
// 					},
// 				},
// 				channelTitle: "عمر عبد الكافي",
// 				localized: {
// 					title: "دعاء",
// 					description: "",
// 				},
// 			},
// 			contentDetails: {
// 				itemCount: 0,
// 			},
// 			player: {
// 				embedHtml:
// 					'\u003ciframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PL7PzPXcv-qizbp9_3NlR5i5lrQK-E7FRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen\u003e\u003c/iframe\u003e',
// 			},
// 		},
// 	],
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
	const channelPlaylists = await getChannelPlaylists(id)
	if (!channelPlaylists.items[0]) return notFound()
	return (
		// @ts-ignore
		<Feed data={channelPlaylists.items} />
	)
}

export default page
