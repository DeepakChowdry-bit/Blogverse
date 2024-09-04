import connect from "@/db/connect";
import Blog from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect();

        const blogs = await Blog.find({});

        console.log(blogs)

        return NextResponse.json({
            messgae: 'Blogs fetched successfully',
            success: true,
            blogs
        })
    } catch (err) {
        return NextResponse.json({ err: 'Internal server error' }, { status: 500 })
    }
}