export interface Video {
  id: {
    kind?: "youtube#video" | "youtube#playlist" | "youtube#channel"
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
  }
}

export interface VideoDetails {
  items: [
    {
      kind: "youtube#video" | "youtube#playlist" | "youtube#channel"
      id: string
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
      statistics: {
        viewCount: string
        likeCount: string
        favoriteCount: string
        commentCount: string
      }
    }
  ]
}
