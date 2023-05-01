import { NextResponse } from "next/server"
import ytdl from "ytdl-core"

interface NextRouteContext {
	params: {
		id: string
	}
}

export async function GET(
	request: Request,
	{ params: { id } }: NextRouteContext
) {
	// 	ytdl(`https://www.youtube.com/watch?v=${id}`, {
	// 		format: {container: "mp4"}
	// }).pipe(res);
	let info = await ytdl.getInfo(id)
	// ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
	// 	fs.createWriteStream("video.mp4")
	// )
	// let format = ytdl.chooseFormat(info.formats, { quality: "720" })
	// console.log("Format found!", format)
	return NextResponse.json({ info }, { status: 200 })
}
