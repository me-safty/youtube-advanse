export interface Video {
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

export interface DownloadDetails {
	id: string
	title: string
	lengthSeconds: string
	channelTitle: string
	channelId: string
	description: string
	thumbnail: [
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
	adaptiveFormats: FormatDetails[]
}

export interface FormatDetails {
	itag: number
	url: string
	mimeType: string
	bitrate: number
	width: number
	height: number
	qualityLabel: string
	approxDurationMs: string
	contentLength: string
	quality: string
	fps: number
	projectionType: string
	averageBitrate: number
}

export interface Channel {
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
}

export interface SearchDetails {
	nextPageToken: string
	pageInfo: {
		totalResults: number
		resultsPerPage: number
	}
	items: Channel[] | Video[]
}
