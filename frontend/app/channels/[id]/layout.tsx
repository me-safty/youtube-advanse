import ChannelPage from "@/components/ChannelPage"
import { notFound } from "next/navigation"

async function getChannelData(channelId: string) {
	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2Csnippet%2CbrandingSettings%2Cstatistics&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`,
		{ next: { revalidate: 1000 } }
	)
	return res.json()
}

// const channelData = {
// 	kind: "youtube#channelListResponse",
// 	etag: "Als6lsaZ0S7Mezg3kYYgCZiR6Es",
// 	pageInfo: { totalResults: 1, resultsPerPage: 5 },
// 	items: [
// 		{
// 			kind: "youtube#channel",
// 			id: "UCKUOmGXE9Ytlc2EzpGqimtw",
// 			snippet: {
// 				title: "عمر عبد الكافي",
// 				description:
// 					"أهلا و سهلا بكم في القناة الرسمية لفضيلة الشيخ الدكتور عمر عبدالكافي ستجدون هنا معظم البرامج التلفزيونية و التسجيلات الخاصة و خطب الجمعة المصورة\nWelcome to Dr. Omar Abdelkafys' official YouTube Channel.\n\nHere you'll find most of Dr. Omar Abdelkafys' TV programs and video recordings.",
// 				customUrl: "@abdelkafytube",
// 				publishedAt: "2012-12-21T20:34:19Z",
// 				thumbnails: {
// 					default: {
// 						url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s88-c-k-c0x00ffffff-no-rj",
// 						width: 88,
// 						height: 88,
// 					},
// 					medium: {
// 						url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s240-c-k-c0x00ffffff-no-rj",
// 						width: 240,
// 						height: 240,
// 					},
// 					high: {
// 						url: "https://yt3.ggpht.com/ytc/AGIKgqPOp2F94oMIV6SCjHkKi9-ZGYYY25XcwdM9yBSF4Q=s800-c-k-c0x00ffffff-no-rj",
// 						width: 800,
// 						height: 800,
// 					},
// 				},
// 			},
// 			contentDetails: {
// 				relatedPlaylists: { likes: "", uploads: "UUKUOmGXE9Ytlc2EzpGqimtw" },
// 			},
// 			statistics: {
// 				viewCount: "970843260",
// 				subscriberCount: "8740000",
// 				videoCount: "3396",
// 			},
// 			brandingSettings: {
// 				image: {
// 					bannerExternalUrl:
// 						"https://yt3.googleusercontent.com/sIxdHewY4qWTY60UIkfwR2ejarGNmLx_NEEWnR7E8FHmp9ojXBISCoyNzTlmCKiugQQTZ9ZL",
// 				},
// 			},
// 		},
// 	],
// }

export default async function RootLayout({
	children,
	params: { id },
}: {
	children: React.ReactNode
	params: { id: string }
}) {
	const channelData = await getChannelData(id)
	if (!channelData.items[0]) return notFound()
	// console.log(channelData)
	return (
		<main className="flex flex-col">
			<title>{channelData.items[0].snippet.title}</title>
			{/* @ts-ignore */}
			<ChannelPage channel={channelData.items[0]} />
			{children}
		</main>
	)
}
