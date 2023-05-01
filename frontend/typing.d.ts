export interface Video {
	kind?: "youtube#video" | "youtube#playlistItem"
	id: {
		kind?: "youtube#video" | "youtube#playlistItem"
		videoId: string
	}
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: {
				url: string
				width: number
				height: number
			}
			medium: {
				url: string
				width: number
				height: number
			}
			high: {
				url: string
				width: number
				height: number
			}
		}
		channelTitle: string
		position?: number
		resourceId?: {
			kind: string
			videoId: string
		}
	}
	statistics?: {
		viewCount: string
		likeCount: string
		favoriteCount: string
		commentCount: string
	}
}

// {
//   "kind": "youtube#videoListResponse",
//   "items": [
//     {
//       "kind": "youtube#video",
//       "id": "7ghhRHRP6t4",
//       "snippet": {
//         "publishedAt": "2020-07-24T04:00:10Z",
//         "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
//         "title": "Maroon 5 - Nobody's Love (Official Music Video)",
//         "description": "“Nobody’s Love” is out now: https://smarturl.it/NobodysLove \n\nFor more, visit: \nInstagram: https://www.instagram.com/maroon5 \nFacebook: https://www.facebook.com/maroon5 \nTwitter: https://twitter.com/maroon5 \nSign up for updates: http://smarturl.it/Maroon5.News \n\n// \n\nLYRICS \n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\nYou could make a grown man cry\nIf you ever left my side\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nBaby you’re the key to my heart locket\nIf you ever left never unlock it\nLonely like an island, island oh oh\n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love, but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna need nobody’s trust but yours, but yours\n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou could make a grown man cry, if you ever left my side\nNever let you go never let you go\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nHit me like a drug and I can’t stop it\nFit me like a glove and I cant knock it. \nI aint even lying lying oh oh \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna keep nobody’s trust but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\nNobody’s love! Oh yea \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\n#Maroon5 #NobodysLove #M5\n \nMusic video by Maroon 5 performing Nobody's Love. © 2020 Interscope Records",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/7ghhRHRP6t4/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/7ghhRHRP6t4/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/7ghhRHRP6t4/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/7ghhRHRP6t4/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/7ghhRHRP6t4/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//         "channelTitle": "Maroon5VEVO",
//         "tags": [
//           "Maroon",
//           "Nobody's",
//           "Love",
//           "222",
//           "Records/Interscope",
//           "Records",
//           "Pop",
//           "マルーン5",
//           "마룬5",
//           "魔力紅",
//           "魔力红",
//           "한글자막",
//           "日本語字幕",
//           "subtítulos en español",
//           "Türkçe Altyazılı",
//           "Phụ đề tiếng Việt",
//           "Subtitles in Tagalog",
//           "Teks dalam Bahasa Indonesia",
//           "उपशीर्षक हिंदी में",
//           "Sarikata Dalam Bahasa Malaysia",
//           "คำบรรยายภาษาไทย"
//         ],
//         "categoryId": "10",
//         "liveBroadcastContent": "none",
//         "localized": {
//           "title": "Maroon 5 - Nobody's Love (Official Music Video)",
//           "description": "“Nobody’s Love” is out now: https://smarturl.it/NobodysLove \n\nFor more, visit: \nInstagram: https://www.instagram.com/maroon5 \nFacebook: https://www.facebook.com/maroon5 \nTwitter: https://twitter.com/maroon5 \nSign up for updates: http://smarturl.it/Maroon5.News \n\n// \n\nLYRICS \n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\nYou could make a grown man cry\nIf you ever left my side\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nBaby you’re the key to my heart locket\nIf you ever left never unlock it\nLonely like an island, island oh oh\n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love, but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna need nobody’s trust but yours, but yours\n\nYou could make a grown man cry\nIf you ever said goodbye\nNever let you go oh-woah oh-I\nNever let you go oh-woah oh-I\n\nYou could make a grown man cry, if you ever left my side\nNever let you go never let you go\n\nYou’re the only hand in my back pocket\nIf you ever left I’d go psychotic\nHeaven hear me cryin cryin oh oh\nHit me like a drug and I can’t stop it\nFit me like a glove and I cant knock it. \nI aint even lying lying oh oh \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love it’s never gonna be nobody’s love\nNever gonna keep nobody’s trust but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\nNobody’s love! Oh yea \n\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\nIf my love ain’t your love it’s never gonna be nobody’s love \nNever gonna need nobody’s love but yours, but yours\n\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\nIf my love ain’t your love then it’s nobody’s\nOnly yours only yours not just anybody\nAnd If you ever leave then i’m never gonna want nobody, nobody’s love\n\n#Maroon5 #NobodysLove #M5\n \nMusic video by Maroon 5 performing Nobody's Love. © 2020 Interscope Records"
//         }
//       },
//       "contentDetails": {
//         "duration": "PT3M50S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "true",
//         "licensedContent": true,
//         "regionRestriction": {
//           "blocked": [
//             "IO",
//             "KP",
//             "SS"
//           ]
//         },
//         "contentRating": {},
//         "projection": "rectangular"
//       },
//       "statistics": {
//         "viewCount": "36670377",
//         "likeCount": "571656",
//         "favoriteCount": "0",
//         "commentCount": "18868"
//       }
//     }
//   ],
//   "pageInfo": {
//     "totalResults": 1,
//     "resultsPerPage": 1
//   }
// }

// export interface VideoDetails {
// 	items: Video[]
// }

// export interface Video {
// 	id: string
// 	snippet: {
// 		publishedAt: string
// 		channelId: string
// 		title: string
// 		description: string
// 		thumbnails: {
// 			default: {
// 				url: string
// 				width: number
// 				height: number
// 			}
// 			medium: {
// 				url: string
// 				width: number
// 				height: number
// 			}
// 			high: {
// 				url: string
// 				width: number
// 				height: number
// 			}
// 		}
// 		channelTitle: string
// 	}
// 	statistics: {
// 		viewCount: string
// 		likeCount: string
// 		favoriteCount: string
// 		commentCount: string
// 	}
// }

export interface RapidVideoDetails {
	type: "video"
	video: {
		author: {
			avatar: [
				{
					height: number
					url: string
					width: number
				}
			]
			channelId: string
			title: string
		}
		descriptionSnippet: string
		movingThumbnails: [
			{
				height: number
				url: string
				width: number
			}
		]
		publishedTimeText: string
		stats: {
			views: number
		}
		thumbnails: [
			{
				height: number
				url: string
				width: number
			},
			{
				height: number
				url: string
				width: number
			}
		]
		title: string
		videoId: string
	}
}

export interface RapidChannelId {
	channel: {
		avatar: [
			{
				height: 88
				url: "https://yt3.ggpht.com/-qCvx3y42iXp9cMNe5Yx3aoR2lL8TFxsrLShyBLuXOE4tY56kt_bPceyvPw95rpUqgKqI8zDBe4=s88-c-k-c0x00ffffff-no-rj-mo"
				width: 88
			},
			{
				height: 176
				url: "https://yt3.ggpht.com/-qCvx3y42iXp9cMNe5Yx3aoR2lL8TFxsrLShyBLuXOE4tY56kt_bPceyvPw95rpUqgKqI8zDBe4=s176-c-k-c0x00ffffff-no-rj-mo"
				width: 176
			}
		]
		badges: [
			{
				text: "Verified"
				type: "VERIFIED_CHANNEL"
			}
		]
		canonicalBaseUrl: "/@ElzeroWebSchool"
		channelId: "UCSNkfKl4cU-55Nm-ovsvOHQ"
		descriptionSnippet: "Life Is Short, Start Learning."
		stats: {
			subscribers: 1150000
			subscribersText: "1.15M subscribers"
		}
		title: "Elzero Web School"
		username: "@ElzeroWebSchool"
	}
	type: "channel"
}

// {
//   playlist: {
//     author: {
//       badges: [
//         {
//           text: "Verified"
//           type: "VERIFIED_CHANNEL"
//         }
//       ]
//       canonicalBaseUrl: "/@ElzeroWebSchool"
//       channelId: "UCSNkfKl4cU-55Nm-ovsvOHQ"
//       title: "Elzero Web School"
//     }
//     playlistId: "PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
//     stats: {
//       videos: 188
//     }
//     thumbnails: [
//       {
//         height: 94
//         url: "https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDj57waNR2-mixmGWYAwbmbclnYmw"
//         width: 168
//       },
//       {
//         height: 110
//         url: "https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCMdTPP-Rl3djR9ooKV-yWsMtMK3A"
//         width: 196
//       },
//       {
//         height: 138
//         url: "https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCHhtGNj9yRnTH3SK8PlJsYX1Gw9w"
//         width: 246
//       },
//       {
//         height: 188
//         url: "https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC7bmiWM5DxiYEk-iTeXzBPdnWbZg"
//         width: 336
//       }
//     ]
//     title: "Learn JavaScript in Arabic 2021"
//     updatedTime: null
//     updatedTimeText: null
//   }
//   type: "playlist"
// }

// export interface DownloadDetails {
// 	id: string
// 	title: string
// 	lengthSeconds: string
// 	channelTitle: string
// 	channelId: string
// 	description: string
// 	thumbnail: [
// 		{
// 			url: string
// 			width: number
// 			height: number
// 		},
// 		{
// 			url: string
// 			width: number
// 			height: number
// 		},
// 		{
// 			url: string
// 			width: number
// 			height: number
// 		},
// 		{
// 			url: string
// 			width: number
// 			height: number
// 		}
// 	]
// 	adaptiveFormats: FormatDetails[]
// }

export interface FormatDetails {
	url: string
	mimeType: string
	bitrate: number
	width: number
	height: number
	qualityLabel: string
	approxDurationMs: string
	quality: string
	averageBitrate: number
	hasVideo: boolean
	hasAudio: boolean
}

export interface Channel {
	kind?: "youtube#channel"
	id: {
		kind: "youtube#channel"
		channelId: string
	}
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: {
				url: string
			}
			medium: {
				url: string
			}
			high: {
				url: string
			}
		}
		channelTitle: string
	}
}

export interface ChannelDetails {
	kind: "youtube#channel"
	id: string
	snippet: {
		title: string
		description: string
		customUrl: string
		publishedAt: string
		thumbnails: {
			default: {
				url: string
				width: number
				height: number
			}
			medium: {
				url: string
				width: number
				height: number
			}
			high: {
				url: string
				width: number
				height: number
			}
		}
	}
	contentDetails: {
		relatedPlaylists: {
			uploads: string
		}
	}
	statistics: {
		viewCount: string
		subscriberCount: string
		videoCount: string
	}
	brandingSettings: {
		image: {
			bannerExternalUrl: string
		}
	}
}

export interface PlayList {
	kind?: "youtube#playlist"
	id: {
		kind: "youtube#playlist"
		playlistId: string
	}
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: {
				url: string
				width: number
				height: number
			}
			medium: {
				url: string
				width: number
				height: number
			}
			high: {
				url: string
				width: number
				height: number
			}
		}
		channelTitle: string
	}
	contentDetails?: {
		itemCount: number
	}
	player?: {
		embedHtml: string
	}
}

export interface SearchDetails {
	nextPageToken: string
	pageInfo: {
		totalResults: number
		resultsPerPage: number
	}
	items: Channel[] | Video[]
}

export interface DownloadDetails {
	formats: FormatDetails[]
	// related_videos: [
	// 	{
	// 		id: "u8zOxeFN36o"
	// 		title: "Authentication in NextJs 13 using Clerk"
	// 		published: "2 weeks ago"
	// 		author: {
	// 			id: "UC6MkbhaNlxFYjv9sBQRDVow"
	// 			name: "Hamed Bahram"
	// 			user: "@hamedbahram"
	// 			channel_url: "https://www.youtube.com/channel/UC6MkbhaNlxFYjv9sBQRDVow"
	// 			user_url: "https://www.youtube.com/user/@hamedbahram"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqOhWZ3IwnThURr5ie7iG5pMLfhTD2AZQPKxKLIZ-w=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "1.4K"
	// 		view_count: "1449"
	// 		length_seconds: 1784
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/u8zOxeFN36o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDmqjmckM7CkxQg0drT4_ph3V8TwA"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/u8zOxeFN36o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxprCY80Y4eZGItKOAozo4P1CXiA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/u8zOxeFN36o/mqdefault_6s.webp?du=3000&sqp=CJqWvqIG&rs=AOn4CLDkVfTfijYggcTFeMIHFoUcuPE5Qg"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "gSSsZReIFRk"
	// 		title: "Next.js App Router: Routing, Data Fetching, Caching"
	// 		published: "3 weeks ago"
	// 		author: {
	// 			id: "UCLq8gNoee7oXM7MvTdjyQvA"
	// 			name: "Vercel"
	// 			user: "@VercelHQ"
	// 			channel_url: "https://www.youtube.com/channel/UCLq8gNoee7oXM7MvTdjyQvA"
	// 			user_url: "https://www.youtube.com/user/@VercelHQ"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqNGxs8XAfudsOFr9KhpeQ_JwoIcvSJFLVRQeASp9g=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "82K"
	// 		view_count: "82592"
	// 		length_seconds: 872
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/gSSsZReIFRk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAi6qy3ORLq4ROnYASEaMOVe-QZsQ"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/gSSsZReIFRk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZtQsf9G5yuRisU7iPBSMShgR8kA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/gSSsZReIFRk/mqdefault_6s.webp?du=3000&sqp=CJuCvqIG&rs=AOn4CLAOoPk-EjkNDr0IMqxHBcMrE-5r3w"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "OJ5GaNVujaw"
	// 		title: "Data fetching in NextJs 13 `app` router"
	// 		published: "3 weeks ago"
	// 		author: {
	// 			id: "UC6MkbhaNlxFYjv9sBQRDVow"
	// 			name: "Hamed Bahram"
	// 			user: "@hamedbahram"
	// 			channel_url: "https://www.youtube.com/channel/UC6MkbhaNlxFYjv9sBQRDVow"
	// 			user_url: "https://www.youtube.com/user/@hamedbahram"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqOhWZ3IwnThURr5ie7iG5pMLfhTD2AZQPKxKLIZ-w=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "1.3K"
	// 		view_count: "1378"
	// 		length_seconds: 2606
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/OJ5GaNVujaw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCHS14RonRJpSBn60tUUFeyb1ZT6A"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/OJ5GaNVujaw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpXO35Dg4T7PtFSHNelfi-aTc9ww"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/OJ5GaNVujaw/mqdefault_6s.webp?du=3000&sqp=CMiHvqIG&rs=AOn4CLDWzOfjY5pHGOpeC9gagO5Pd8x5XQ"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "J1gzN1SAhyM"
	// 		title: "T3: TRPC, Prisma and NextAuth Done Right"
	// 		published: "2 months ago"
	// 		author: {
	// 			id: "UC6vRUjYqDuoUsYsku86Lrsw"
	// 			name: "Jack Herrington"
	// 			user: "@jherr"
	// 			channel_url: "https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw"
	// 			user_url: "https://www.youtube.com/user/@jherr"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqPgojODHYSwlbvdaIQ7QwmUVnx1OfyPPSFDtFFOUg=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "54K"
	// 		view_count: "54913"
	// 		length_seconds: 2594
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/J1gzN1SAhyM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDBySW3rQCFgeRxJahxhrAswc5qPQ"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/J1gzN1SAhyM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIlvlg5BRfVMxG4YaY_Rw86smeaA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/J1gzN1SAhyM/mqdefault_6s.webp?du=3000&sqp=CP-ZvqIG&rs=AOn4CLDi035qSA7f-nC-ch56yfmvIH3iwA"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "vPRdY87_SH0"
	// 		title: "Un-Suck Your React Components - Composable & Compound Components"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCMZMjFhnM3vWqqOvPgXTN2A"
	// 			name: "Vincas Stonys"
	// 			user: "@vincasstonys"
	// 			channel_url: "https://www.youtube.com/channel/UCMZMjFhnM3vWqqOvPgXTN2A"
	// 			user_url: "https://www.youtube.com/user/@vincasstonys"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/rheJv2sr7JYVA42-X92Ni3NHhP8aux5v0YUI-p8plGTD6POH1IFJkTE2VEfkNPtudUM7eHayQ2U=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "37K"
	// 		view_count: "37239"
	// 		length_seconds: 947
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/vPRdY87_SH0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALU06ZuqXWw4QYh-osRtNJrqIaCA"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/vPRdY87_SH0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGOzpB5iQG7PZ-kOvV1Q5iUz4kIg"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/vPRdY87_SH0/mqdefault_6s.webp?du=3000&sqp=CPqDvqIG&rs=AOn4CLB8zzPEXTWIyHBAWrA54_VuqGZdBw"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "1n7slbDB1bQ"
	// 		title: "Next.js Data Fetching, Dynamic Routes & Metadata | Nextjs 13"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCY38RvRIxYODO4penyxUwTg"
	// 			name: "Dave Gray"
	// 			user: "@DaveGrayTeachesCode"
	// 			channel_url: "https://www.youtube.com/channel/UCY38RvRIxYODO4penyxUwTg"
	// 			user_url: "https://www.youtube.com/user/@DaveGrayTeachesCode"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqPTYuxSA9QQBsfYGVm7ABKrQr2--Q8m_UdVqEmUkQ=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "29K"
	// 		view_count: "29185"
	// 		length_seconds: 2588
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/1n7slbDB1bQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrIdXCkqdYY8T2XVhHOZHBeQyA2w"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/1n7slbDB1bQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRuV7OQHrLk-4NGxmLWa8A4Ncs4Q"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/1n7slbDB1bQ/mqdefault_6s.webp?du=3000&sqp=CKCNvqIG&rs=AOn4CLAPCUOipWEEMbLa8Jba6AETTliEqw"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "dRLjoT4r-jc"
	// 		title: "State Management for NextJS 13 Server and Client Components"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UC6vRUjYqDuoUsYsku86Lrsw"
	// 			name: "Jack Herrington"
	// 			user: "@jherr"
	// 			channel_url: "https://www.youtube.com/channel/UC6vRUjYqDuoUsYsku86Lrsw"
	// 			user_url: "https://www.youtube.com/user/@jherr"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqPgojODHYSwlbvdaIQ7QwmUVnx1OfyPPSFDtFFOUg=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "49K"
	// 		view_count: "49639"
	// 		length_seconds: 1625
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/dRLjoT4r-jc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBj0KTScEdPzcUOmRMSH0MK-Q_K8w"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/dRLjoT4r-jc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCX5_coUauAl4Vs1Z54trppgf10FQ"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/dRLjoT4r-jc/mqdefault_6s.webp?du=3000&sqp=CKnwvaIG&rs=AOn4CLDq0YZhLIFHHQ_nVHWXBrfgxtFtHQ"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "mxLLIwZ93nY"
	// 		title: "Getting started with Turborepo"
	// 		published: "4 months ago"
	// 		author: {
	// 			id: "UC6MkbhaNlxFYjv9sBQRDVow"
	// 			name: "Hamed Bahram"
	// 			user: "@hamedbahram"
	// 			channel_url: "https://www.youtube.com/channel/UC6MkbhaNlxFYjv9sBQRDVow"
	// 			user_url: "https://www.youtube.com/user/@hamedbahram"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqOhWZ3IwnThURr5ie7iG5pMLfhTD2AZQPKxKLIZ-w=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "5.6K"
	// 		view_count: "5683"
	// 		length_seconds: 2071
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/mxLLIwZ93nY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC2hfCvtz0c2-4ZUpGrAwhfSYXapg"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/mxLLIwZ93nY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS5k0PNAcAqE9in-kXoVZ0KPRp9Q"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/mxLLIwZ93nY/mqdefault_6s.webp?du=3000&sqp=CJDYvaIG&rs=AOn4CLDaMsKBdLhOqPbu1K5sEDYq4WWiHA"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "xirQ7AMyTM8"
	// 		title: "Next.js Route Handlers | API Routes in Nextjs 13"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCY38RvRIxYODO4penyxUwTg"
	// 			name: "Dave Gray"
	// 			user: "@DaveGrayTeachesCode"
	// 			channel_url: "https://www.youtube.com/channel/UCY38RvRIxYODO4penyxUwTg"
	// 			user_url: "https://www.youtube.com/user/@DaveGrayTeachesCode"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqPTYuxSA9QQBsfYGVm7ABKrQr2--Q8m_UdVqEmUkQ=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "7K"
	// 		view_count: "7001"
	// 		length_seconds: 1243
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/xirQ7AMyTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCbkR6jwOnIYN2tdNi9TWmeH3fzwg"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/xirQ7AMyTM8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8cdVnkppH9-KaUDm4kW6hrRgs8w"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/xirQ7AMyTM8/mqdefault_6s.webp?du=3000&sqp=CLvTvaIG&rs=AOn4CLBZ90AYjwSXzMUmo_rsKDl43bTbkA"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "UfNMlhu3L4I"
	// 		title: "Next.js 13.2 Explained!"
	// 		published: "2 months ago"
	// 		author: {
	// 			id: "UCLq8gNoee7oXM7MvTdjyQvA"
	// 			name: "Vercel"
	// 			user: "@VercelHQ"
	// 			channel_url: "https://www.youtube.com/channel/UCLq8gNoee7oXM7MvTdjyQvA"
	// 			user_url: "https://www.youtube.com/user/@VercelHQ"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqNGxs8XAfudsOFr9KhpeQ_JwoIcvSJFLVRQeASp9g=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "85K"
	// 		view_count: "85485"
	// 		length_seconds: 515
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/UfNMlhu3L4I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDci29F8VJsz4JlpA1-VPXjuhv-hw"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/UfNMlhu3L4I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnlAk2thmL-WSqb2FlssLlbNc9tg"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/UfNMlhu3L4I/mqdefault_6s.webp?du=3000&sqp=CLTbvaIG&rs=AOn4CLDrYCvLsYbZrVTPCWA7hCDNDw-2OQ"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "YkOSUVzOAA4"
	// 		title: "T3 Stack Tutorial - FROM 0 TO PROD FOR $0 (Next.js, tRPC, TypeScript, Tailwind, Prisma & More)"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCbRP3c757lWg9M-U7TyEkXA"
	// 			name: "Theo - t3․gg"
	// 			user: "@t3dotgg"
	// 			channel_url: "https://www.youtube.com/channel/UCbRP3c757lWg9M-U7TyEkXA"
	// 			user_url: "https://www.youtube.com/user/@t3dotgg"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ivwidjUdWTN6um1nYcgbq7Kkm5o13BpUOIBaD6IuFxrrtNcAdWa8heY_Mbvy-IKRJUuvhgACFJ8=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "186K"
	// 		view_count: "186128"
	// 		length_seconds: 10743
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/YkOSUVzOAA4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBn5oUK1-KZAku0iG9BegvN5ilKJQ"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/YkOSUVzOAA4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3jgc3mQzIonPtrA89KNxvsYZ5PA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/YkOSUVzOAA4/mqdefault_6s.webp?du=3000&sqp=CMLmvaIG&rs=AOn4CLBu9GPvfR19R_1oPbs3geinFUs8rQ"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "2FeymQoKvrk"
	// 		title: "Build and Deploy Your Own ChatGPT AI App in JavaScript | OpenAI, Machine Learning"
	// 		published: "4 months ago"
	// 		author: {
	// 			id: "UCmXmlB4-HJytD7wek0Uo97A"
	// 			name: "JavaScript Mastery"
	// 			user: "@javascriptmastery"
	// 			channel_url: "https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A"
	// 			user_url: "https://www.youtube.com/user/@javascriptmastery"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "629K"
	// 		view_count: "629731"
	// 		length_seconds: 3707
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/2FeymQoKvrk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBi2PXgRk5jETJtsCA-KRmfoxKqqg"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/2FeymQoKvrk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDGZxrP7MoaCUFb1AQBhWtqhOy3A"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/2FeymQoKvrk/mqdefault_6s.webp?du=3000&sqp=CNDKvaIG&rs=AOn4CLCQtaIJ4Vh9fuUXme5leS6KeHAEyw"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "oLPgc5Fp2Ts"
	// 		title: "Learn NextJS 13: Build a Modern Full-Stack E-commerce App with TailwindCSS + Stripe + Zustand"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCPBK_brqoVQtO-fOWpxQGXw"
	// 			name: "Smoljames"
	// 			user: "@Smoljames"
	// 			channel_url: "https://www.youtube.com/channel/UCPBK_brqoVQtO-fOWpxQGXw"
	// 			user_url: "https://www.youtube.com/user/@Smoljames"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/Ck5W1cCbxGCXOXCTGaABVnYq-LAiyqmt45oMOZs6RaA2Jrh0_xfPLgS7OaWDhWk1UYXSheRS=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "5.4K"
	// 		view_count: "5446"
	// 		length_seconds: 5244
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/oLPgc5Fp2Ts/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJZ3BSvn7Jgc-2NF6sq9TueHSHFw"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/oLPgc5Fp2Ts/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD54O_TXT0wRJEMT2Y11iHDxqXhJA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/oLPgc5Fp2Ts/mqdefault_6s.webp?du=3000&sqp=CNmDvqIG&rs=AOn4CLC3TngiDVMsNOzpAg6rRDGbmICJvw"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "2cB5Fh46Vi4"
	// 		title: "Do you REALLY need a backend?"
	// 		published: "10 months ago"
	// 		author: {
	// 			id: "UCbRP3c757lWg9M-U7TyEkXA"
	// 			name: "Theo - t3․gg"
	// 			user: "@t3dotgg"
	// 			channel_url: "https://www.youtube.com/channel/UCbRP3c757lWg9M-U7TyEkXA"
	// 			user_url: "https://www.youtube.com/user/@t3dotgg"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ivwidjUdWTN6um1nYcgbq7Kkm5o13BpUOIBaD6IuFxrrtNcAdWa8heY_Mbvy-IKRJUuvhgACFJ8=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "114K"
	// 		view_count: "114530"
	// 		length_seconds: 2038
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/2cB5Fh46Vi4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-r6TNOlltxAHMPJnZ5v7lPKuaKQ"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/2cB5Fh46Vi4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQNSctLVQQ2kImThzB2VXZtZI_QQ"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/2cB5Fh46Vi4/mqdefault_6s.webp?du=3000&sqp=CNCQvqIG&rs=AOn4CLCPisbki9kv3r4QOb1qNWssZ9s_5Q"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "IYoZvxUbhUQ"
	// 		title: "Build a Search Bar with Next.js and Prisma (Search API endpoint)"
	// 		published: "2 months ago"
	// 		author: {
	// 			id: "UCxwvyK3-Xs4zvoGWFT_iDmw"
	// 			name: "Shadee Merhi"
	// 			user: "@shadmerhi"
	// 			channel_url: "https://www.youtube.com/channel/UCxwvyK3-Xs4zvoGWFT_iDmw"
	// 			user_url: "https://www.youtube.com/user/@shadmerhi"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/VaYbidm7fvkZ59E0olycflgTTDKAB1MjzH-N6RbkSXbEBZAXzIlY5ZeH16F8FvLxGXbPmBfy=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "7.1K"
	// 		view_count: "7169"
	// 		length_seconds: 2422
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/IYoZvxUbhUQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBahUnswD_pb5vVgIDHC2NkPdPy1A"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/IYoZvxUbhUQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPi6C2RHXiy5YXSgtNk-SkJa1VzA"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/IYoZvxUbhUQ/mqdefault_6s.webp?du=3000&sqp=CIz4vaIG&rs=AOn4CLDblSmU-Cvzgr5I49ooMwn23NrYfg"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "n2CV6f0vFr4"
	// 		title: "Using MDX (markdown) in NextJs 13 `app` folder"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UC6MkbhaNlxFYjv9sBQRDVow"
	// 			name: "Hamed Bahram"
	// 			user: "@hamedbahram"
	// 			channel_url: "https://www.youtube.com/channel/UC6MkbhaNlxFYjv9sBQRDVow"
	// 			user_url: "https://www.youtube.com/user/@hamedbahram"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ytc/AGIKgqOhWZ3IwnThURr5ie7iG5pMLfhTD2AZQPKxKLIZ-w=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "1.8K"
	// 		view_count: "1865"
	// 		length_seconds: 1426
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/n2CV6f0vFr4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLChx9jOzteylpmZ3oOfxNGmTq383A"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/n2CV6f0vFr4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDsCPS2ouSIs9Q2aQhgWYJuMa3eQ"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/n2CV6f0vFr4/mqdefault_6s.webp?du=3000&sqp=CIL-vaIG&rs=AOn4CLD07j3MGnLIGtnAZX-zAWHf-vJ66Q"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "vrR4MlB7nBI"
	// 		title: "NextJS 13 API Routes: Better Than Expected!"
	// 		published: "1 month ago"
	// 		author: {
	// 			id: "UCvGwM5woTl13I-qThI4YMCg"
	// 			name: "Josh tried coding"
	// 			user: "@joshtriedcoding"
	// 			channel_url: "https://www.youtube.com/channel/UCvGwM5woTl13I-qThI4YMCg"
	// 			user_url: "https://www.youtube.com/user/@joshtriedcoding"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/BOomnT3SS1g-FQSUVBy51TaK2ylqbQzD8zeV783mM-W1q3MMbvE8jdjEeWwFqHmlm5Dk4dSAtg=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: false
	// 		}
	// 		short_view_count_text: "10K"
	// 		view_count: "10835"
	// 		length_seconds: 905
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/vrR4MlB7nBI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBY_FeLN0XLSVtyPFWzNgIg1EFldg"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/vrR4MlB7nBI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClsUvtOxa391RzkC1KxQBI4Sr-wQ"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/vrR4MlB7nBI/mqdefault_6s.webp?du=3000&sqp=CP75vaIG&rs=AOn4CLDvaA_4jVpvM80QM5h_NP73Sgy2Ig"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	},
	// 	{
	// 		id: "d2yNsZd5PMs"
	// 		title: "How NextJS REALLY Works"
	// 		published: "6 months ago"
	// 		author: {
	// 			id: "UCbRP3c757lWg9M-U7TyEkXA"
	// 			name: "Theo - t3․gg"
	// 			user: "@t3dotgg"
	// 			channel_url: "https://www.youtube.com/channel/UCbRP3c757lWg9M-U7TyEkXA"
	// 			user_url: "https://www.youtube.com/user/@t3dotgg"
	// 			thumbnails: [
	// 				{
	// 					url: "https://yt3.ggpht.com/ivwidjUdWTN6um1nYcgbq7Kkm5o13BpUOIBaD6IuFxrrtNcAdWa8heY_Mbvy-IKRJUuvhgACFJ8=s68-c-k-c0x00ffffff-no-rj"
	// 					width: 68
	// 					height: 68
	// 				}
	// 			]
	// 			verified: true
	// 		}
	// 		short_view_count_text: "91K"
	// 		view_count: "91668"
	// 		length_seconds: 1705
	// 		thumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/vi/d2yNsZd5PMs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBqZBBxPyMCjcA8-DKpTBhY1_UkZw"
	// 				width: 168
	// 				height: 94
	// 			},
	// 			{
	// 				url: "https://i.ytimg.com/vi/d2yNsZd5PMs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5GWkl8gtHk5BflK_zHX75pvI3Uw"
	// 				width: 336
	// 				height: 188
	// 			}
	// 		]
	// 		richThumbnails: [
	// 			{
	// 				url: "https://i.ytimg.com/an_webp/d2yNsZd5PMs/mqdefault_6s.webp?du=3000&sqp=CL-KvqIG&rs=AOn4CLDg_aiopnTiPJB5oI8di1R0MQSqKw"
	// 				width: 320
	// 				height: 180
	// 			}
	// 		]
	// 		isLive: false
	// 	}
	// ]
	videoDetails: {
		title: string
		description: string
		lengthSeconds: string
		viewCount: string
		publishDate: string
		videoId: string
		channelId: string
		author: {
			id: string
			name: string
			user: string
			channel_url: string
			thumbnails: [
				{
					url: string
					width: number
					height: number
				},
				{
					url: string
					width: number
					height: number
				},
				{
					url: string
					width: number
					height: number
				}
			]
			verified: boolean
			subscriber_count: number
		}
		likes: number
		dislikes: number
		video_url: string
		thumbnails: [
			{
				url: string
				width: number
				height: number
			},
			{
				url: string
				width: number
				height: number
			},
			{
				url: string
				width: number
				height: number
			},
			{
				url: string
				width: number
				height: number
			},
			{
				url: string
				width: number
				height: number
			}
		]
	}
}
