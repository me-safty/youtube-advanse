import Download from "@/components/Download"
// async function getData(videoId: string) {
//   const res = await fetch(
//     `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`,
//     {
//       cache: "no-store",
//       method: "GET",
//       // @ts-ignore
//       headers: {
//         "content-type": "application/octet-stream",
//         "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//         "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
//       },
//     }
//   )
//   return res.json()
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
	// const downloadData = await getData(id)

	const downloadData = {
		id: "UxxajLWwzqY",
		title: "Icona Pop - I Love It (feat. Charli XCX) [OFFICIAL VIDEO]",
		lengthSeconds: "180",
		channelTitle: "Icona Pop",
		channelId: "UC7spdtNtUXp1xVdUS1M2Mxg",
		description:
			"New single 'Next Mistake' available now on all music platforms: https://ffm.to/nextmistake\n\nHi Icons! Follow us on Instagram! 🚀 \n\nhttp://instagram.com/iconapop\n\nI Love It (feat. Charli XCX) \n\nSTREAM 'This Is... Icona Pop': http://smarturl.it/ThisIs_Streaming\n\nDOWNLOAD 'This Is... Icona Pop'\n http://smarturl.it/ThisIs\n\nFOLLOW:\nhttp://iconapop.com\nhttp://facebook.com/iconapop \nhttps://instagram.com/iconapop\nhttp://twitter.com/iconapop\nhttp://soundcloud.com/iconapop",
		thumbnail: [
			{
				url: "https://i.ytimg.com/vi/UxxajLWwzqY/default.jpg",
				width: 120,
				height: 90,
			},
			{
				url: "https://i.ytimg.com/vi/UxxajLWwzqY/mqdefault.jpg",
				width: 320,
				height: 180,
			},
			{
				url: "https://i.ytimg.com/vi/UxxajLWwzqY/hqdefault.jpg",
				width: 480,
				height: 360,
			},
			{
				url: "https://i.ytimg.com/vi/UxxajLWwzqY/sddefault.jpg",
				width: 640,
				height: 480,
			},
		],
		adaptiveFormats: [
			{
				itag: 136,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=136&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=22825797&dur=179.960&lmt=1643840107073139&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANs7UtA_xf-hEWv-tDDCNGbsniqfJ1uaGSqz0hJjKf0cAiEAwzOHUWwIYtocZib02occiBcT-Xw_3f9oV01GEXuRBgs%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d401f"',
				bitrate: 1741485,
				width: 1280,
				height: 720,
				contentLength: "22825797",
				quality: "hd720",
				fps: 25,
				qualityLabel: "720p",
				projectionType: "RECTANGULAR",
				averageBitrate: 1014705,
				approxDurationMs: "179960",
			},
			{
				itag: 247,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=247&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=21978782&dur=179.960&lmt=1643842968822421&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJR_y_i3O9KZdigx4E758ipLX-IXZ7P9nlGUogg_8UaiAiEAu3RgYVYBe0awYYDiT6zEB8Nx56atviYv1KKXXvEbwbg%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 1515959,
				width: 1280,
				height: 720,
				contentLength: "21978782",
				quality: "hd720",
				fps: 25,
				qualityLabel: "720p",
				projectionType: "RECTANGULAR",
				averageBitrate: 977051,
				approxDurationMs: "179960",
			},
			{
				itag: 398,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=398&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=21930854&dur=179.960&lmt=1643864982583732&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgPxe2ud93BEROf0MgsSCJNFbTDRxPFYzjC5iBkjqd3bICIE1D-5RnLSOUpkdBkRdknhk8lnbc3j-K3BMAEYcX8q05&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="av01.0.05M.08"',
				bitrate: 1300319,
				width: 1280,
				height: 720,
				contentLength: "21930854",
				quality: "hd720",
				fps: 25,
				qualityLabel: "720p",
				projectionType: "RECTANGULAR",
				averageBitrate: 974921,
				approxDurationMs: "179960",
			},
			{
				itag: 135,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=135&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=14204187&dur=179.960&lmt=1643840102997596&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANzhTf13gJVly67rcsJM9gz4fMgBf4sILi03b0Y2g7cQAiAfMoDSLIjSwdou7YdHWAcV4kD4P8tJIOqs_RVLqqaauQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d401e"',
				bitrate: 982652,
				width: 854,
				height: 480,
				contentLength: "14204187",
				quality: "large",
				fps: 25,
				qualityLabel: "480p",
				projectionType: "RECTANGULAR",
				averageBitrate: 631437,
				approxDurationMs: "179960",
			},
			{
				itag: 244,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=244&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=12179717&dur=179.960&lmt=1643842947200339&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIffcF0wuoXDuOSHClxV5pxejkbfc4tKSyX6JEQXjd-fQIhAP69_htFNWJk5x5mdSEIAlLrBABilCph4POdFqrv4Imb&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 763050,
				width: 854,
				height: 480,
				contentLength: "12179717",
				quality: "large",
				fps: 25,
				qualityLabel: "480p",
				projectionType: "RECTANGULAR",
				averageBitrate: 541441,
				approxDurationMs: "179960",
			},
			{
				itag: 397,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=397&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=11178607&dur=179.960&lmt=1643865349551865&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgMrxI8wrMU2kusnI3e0HxBQSA69Ne28MgjrAiiWo3YM0CIQDW43Jw84FnCtIxFauGhevCG24xlb-nthuEKCtthhzlDw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="av01.0.04M.08"',
				bitrate: 653334,
				width: 854,
				height: 480,
				contentLength: "11178607",
				quality: "large",
				fps: 25,
				qualityLabel: "480p",
				projectionType: "RECTANGULAR",
				averageBitrate: 496937,
				approxDurationMs: "179960",
			},
			{
				itag: 134,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=134&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=9998225&dur=179.960&lmt=1643840101435332&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPBpZ6Y3WQS_Er1_QwHQcA851wEutXuXmzAlBZHmbYFeAiA-nyAu6iucXfc7-f3IFypm2WkWa8Cu3w7cIz37bnintg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d401e"',
				bitrate: 698603,
				width: 640,
				height: 360,
				contentLength: "9998225",
				quality: "medium",
				fps: 25,
				qualityLabel: "360p",
				projectionType: "RECTANGULAR",
				averageBitrate: 444464,
				highReplication: true,
				approxDurationMs: "179960",
			},
			{
				itag: 243,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=243&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=7202529&dur=179.960&lmt=1643842952432407&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgXfrSFrXcpwx8JaIhm9IOa0pmTLYXgWDLpsDzHdu-ZGoCIQCFz-nDpwbbiUERiJ6vN4ZZB2WVbsHGmb5pVeG9GdX4jA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 410565,
				width: 640,
				height: 360,
				contentLength: "7202529",
				quality: "medium",
				fps: 25,
				qualityLabel: "360p",
				projectionType: "RECTANGULAR",
				averageBitrate: 320183,
				approxDurationMs: "179960",
			},
			{
				itag: 396,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=396&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=6284082&dur=179.960&lmt=1643864979385325&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgaoIg_FXluM73JREsTZvmcKOU-NKCyFJWTMn2GCxSinACIGj2WUOLB3NaWer7LCT-S5tv2lFCxhv71pMSh905S2ER&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="av01.0.01M.08"',
				bitrate: 368570,
				width: 640,
				height: 360,
				contentLength: "6284082",
				quality: "medium",
				fps: 25,
				qualityLabel: "360p",
				projectionType: "RECTANGULAR",
				averageBitrate: 279354,
				approxDurationMs: "179960",
			},
			{
				itag: 133,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=133&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=4903332&dur=179.960&lmt=1643840101169434&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgdNmUTGCJYZl7k4A5MwAgnFIul41iex34CpY9w8MMA8kCIELHQu2u1u2MYLs_ERiFRF5ru6JcDRh3ZQXufHwNFT3w&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d4015"',
				bitrate: 306571,
				width: 426,
				height: 240,
				contentLength: "4903332",
				quality: "small",
				fps: 25,
				qualityLabel: "240p",
				projectionType: "RECTANGULAR",
				averageBitrate: 217974,
				approxDurationMs: "179960",
			},
			{
				itag: 242,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=242&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=4100530&dur=179.960&lmt=1643842945894011&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAI5UiFBMiUHQFNZroO7wEdII2Z1qSVXrm_c3tZpc1Q75AiB9BzZ814AurJk24u6-DVcETRS-1i1JHSNxaXL6FONEag%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 223941,
				width: 426,
				height: 240,
				contentLength: "4100530",
				quality: "small",
				fps: 25,
				qualityLabel: "240p",
				projectionType: "RECTANGULAR",
				averageBitrate: 182286,
				approxDurationMs: "179960",
			},
			{
				itag: 395,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=395&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=3057271&dur=179.960&lmt=1643864856055950&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAM7VCeJPqLFwanzZypPd4_r8vOBL7D-uPVhBj5WCFjBJAiEApTlT-rmStbIqBl5K6-dCPGXDvVeze-t0psBsaRjgdZ4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="av01.0.00M.08"',
				bitrate: 195434,
				width: 426,
				height: 240,
				contentLength: "3057271",
				quality: "small",
				fps: 25,
				qualityLabel: "240p",
				projectionType: "RECTANGULAR",
				averageBitrate: 135908,
				approxDurationMs: "179960",
			},
			{
				itag: 160,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=160&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=1996578&dur=179.960&lmt=1643840107860750&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgKtnpmhosX2FKHYBi2pJaQ4TwwI51nOEhroXAMI1n_9oCIBZXbsAAQKtRESvk4BM5YQWXbP9j2dZTxRij6aMTHi1r&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d400c"',
				bitrate: 110520,
				width: 256,
				height: 144,
				contentLength: "1996578",
				quality: "tiny",
				fps: 25,
				qualityLabel: "144p",
				projectionType: "RECTANGULAR",
				averageBitrate: 88756,
				approxDurationMs: "179960",
			},
			{
				itag: 278,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=278&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=1894548&dur=179.960&lmt=1643842968020681&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4535434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAK8PXeRvNnjns8EhvJhSoEKAQ4QsSqUsbsVQQLccxMkfAiEA2GTC7oQaXYOHklDmqRWoUuPIzdFbBkxstWCYgWk37gg%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 96949,
				width: 256,
				height: 144,
				contentLength: "1894548",
				quality: "tiny",
				fps: 25,
				qualityLabel: "144p",
				projectionType: "RECTANGULAR",
				averageBitrate: 84220,
				approxDurationMs: "179960",
			},
			{
				itag: 394,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=394&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=1507811&dur=179.960&lmt=1643864962570298&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgXSYkXrA5aIg9pfiw_m5ii-fhz9yjDFVHilHYaFgIUToCIBI6lsGJbE0F_VbvbFAMFJbaZbKq3tjKBMRBwXm3wIgs&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="av01.0.00M.08"',
				bitrate: 77182,
				width: 256,
				height: 144,
				contentLength: "1507811",
				quality: "tiny",
				fps: 25,
				qualityLabel: "144p",
				projectionType: "RECTANGULAR",
				averageBitrate: 67028,
				approxDurationMs: "179960",
			},
			{
				itag: 597,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=597&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=701653&dur=180.000&lmt=1643838967655552&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgPbJMDAacOb-v6psaJ_thYr7inEU2ULCdWxgV-NTkdBACIQC3kHHyfsoms5bJ8v9NiBP1aAdBZ2Wf69xb_TasmkpZrA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/mp4; codecs="avc1.4d400b"',
				bitrate: 37485,
				width: 256,
				height: 144,
				contentLength: "701653",
				quality: "tiny",
				fps: 13,
				qualityLabel: "144p",
				projectionType: "RECTANGULAR",
				averageBitrate: 31184,
				approxDurationMs: "180000",
			},
			{
				itag: 598,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=598&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=713799&dur=180.000&lmt=1643838980641076&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJ9mf7qWMxqzQhgQhLBShecGAMp3_Yq2RA60d5Dh7ZXOAiBrW0ZwytLdQFY3i38tPNIJeC-DupE8FvH3Z2sdlusL1Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'video/webm; codecs="vp9"',
				bitrate: 44235,
				width: 256,
				height: 144,
				contentLength: "713799",
				quality: "tiny",
				fps: 13,
				qualityLabel: "144p",
				projectionType: "RECTANGULAR",
				averageBitrate: 31724,
				approxDurationMs: "180000",
			},
			{
				itag: 139,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=139&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=1098952&dur=180.093&lmt=1643838892917601&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgRkBTHKDQFGQi8OZUlJjxTy1gy83zInGKEJMnS2YbvhwCICxbfj7tBNE8UGqP40pSLjI2IxcGaQhfcq_ShYVDhpzB&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/mp4; codecs="mp4a.40.5"',
				bitrate: 50860,
				contentLength: "1098952",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 48817,
				audioQuality: "AUDIO_QUALITY_LOW",
				approxDurationMs: "180093",
				audioSampleRate: "22050",
				audioChannels: 2,
				loudnessDb: 5.84,
			},
			{
				itag: 140,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=140&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=2914268&dur=180.024&lmt=1643838892865309&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgE4nFZOyDcgI9mRq_Lx78tsQ-4JQynOiiuORMFciICMQCIDLMRVwK2mQYzEf67Q7mrsDXdACBTEMF_tHmFD9RYM7M&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/mp4; codecs="mp4a.40.2"',
				bitrate: 132052,
				contentLength: "2914268",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 129505,
				highReplication: true,
				audioQuality: "AUDIO_QUALITY_MEDIUM",
				approxDurationMs: "180024",
				audioSampleRate: "44100",
				audioChannels: 2,
				loudnessDb: 5.84,
			},
			{
				itag: 249,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=249&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=1035181&dur=179.981&lmt=1643838904586723&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAN5i-QdQMEj_P-KzveVTEAPmiteSS8RlPyf_JEYtnB6aAiAf03ls2pk8Pb0lMN0WzYUlQid8Mr6sQ2-yIb6yMQOooA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/webm; codecs="opus"',
				bitrate: 49469,
				contentLength: "1035181",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 46012,
				audioQuality: "AUDIO_QUALITY_LOW",
				approxDurationMs: "179981",
				audioSampleRate: "48000",
				audioChannels: 2,
				loudnessDb: 5.83,
			},
			{
				itag: 250,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=250&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=1367786&dur=179.981&lmt=1643838887298366&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKq1Yt3gpm3f0PN-ZoSMPyibUgAfQOvV0lnVCwFJuSYYAiBhI_WuMafLJ5alwPAwjLPh5zQlsgeQwMEHOKqF_qNzbg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/webm; codecs="opus"',
				bitrate: 64951,
				contentLength: "1367786",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 60796,
				audioQuality: "AUDIO_QUALITY_LOW",
				approxDurationMs: "179981",
				audioSampleRate: "48000",
				audioChannels: 2,
				loudnessDb: 5.83,
			},
			{
				itag: 251,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=251&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=2739861&dur=179.981&lmt=1643838890622789&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgIKrnYy3LPbYSeuRQoj8ncwKJd-nw5Ctd888dQg7sLqQCIQDb2oUmVPI_cDBkYulsA6A5d-T4IIaZ8_QAE_M18NZncg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/webm; codecs="opus"',
				bitrate: 129742,
				contentLength: "2739861",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 121784,
				audioQuality: "AUDIO_QUALITY_MEDIUM",
				approxDurationMs: "179981",
				audioSampleRate: "48000",
				audioChannels: 2,
				loudnessDb: 5.83,
			},
			{
				itag: 599,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=599&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=693741&dur=180.093&lmt=1643838887084829&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBgeOyhbRRd3HhMssl0_I9yaM2P355O4SdBSx0jos8zgCIDJb98aZICzHadaMlxTWfrcKBvVCYUNAeRIfoVZdNist&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/mp4; codecs="mp4a.40.5"',
				bitrate: 32881,
				contentLength: "693741",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 30817,
				audioQuality: "AUDIO_QUALITY_ULTRALOW",
				approxDurationMs: "180093",
				audioSampleRate: "22050",
				audioChannels: 2,
				loudnessDb: 5.84,
			},
			{
				itag: 600,
				url: "https://rr2---sn-4g5edn6y.googlevideo.com/videoplayback?expire=1682435754&ei=SppHZJfMO7rnx_APx-eC6Ao&ip=23.88.39.196&id=o-AC2AcOAVcqNmZxPZJP0JiUR0UvyWbjVO-0sBsE4PZe5U&itag=600&source=youtube&requiressl=yes&mh=S8&mm=31%2C26&mn=sn-4g5edn6y%2Csn-f5f7lnld&ms=au%2Conr&mv=u&mvi=2&pl=27&spc=qEK7B807qYitj_1NHn25V2hr956KPtk&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=700643&dur=179.981&lmt=1643838886524494&mt=1682413797&fvip=2&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAI8EtGGLZ95Jxc7C9216RC01A0Ah0o5hFlh5a7Tw6mIYAiA-N0T9hmK7XGPkhsWoZmDrmDvzdEv1qJH78VoCnyJ13g%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgem4_kUU3jPvurN6wKFIwbccySkN7Om6Jq0ErOpFy4yICIGT3oaWhsog0xh478loGU2b5Phclhu8_1X6W7oTDGAWD",
				mimeType: 'audio/webm; codecs="opus"',
				bitrate: 34184,
				contentLength: "700643",
				quality: "tiny",
				projectionType: "RECTANGULAR",
				averageBitrate: 31142,
				audioQuality: "AUDIO_QUALITY_ULTRALOW",
				approxDurationMs: "179981",
				audioSampleRate: "48000",
				audioChannels: 2,
				loudnessDb: 5.83,
			},
		],
	}

	return (
		<div>
			{/* @ts-ignore */}
			<Download videoDownloadDetails={downloadData} />
		</div>
	)
}

export default page
