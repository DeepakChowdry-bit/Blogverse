import Blog from "@/models/Blog.model";
import connect from "@/db/connect";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connect()

        const requestBody = await request.json()
        const { title, author, content } = requestBody

        const newBlog = await Blog.create({
            title,
            author,
            content
        })

        const saveBlog = await newBlog.save()

        return NextResponse.json({ message: 'Blog published successfully', success: true, saveBlog })
    } catch (err) {
        return NextResponse.json({ err: 'Internal server error' }, { status: 500 })
    }
}