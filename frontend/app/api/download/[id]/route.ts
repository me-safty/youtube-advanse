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
	let info = await ytdl.getInfo(id)

	return NextResponse.json({ info }, { status: 200 })
}
