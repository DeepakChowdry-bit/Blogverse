import connect from "@/db/connect";
import Blog from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect(); // Connect to MongoDB

        const blogs = await Blog.find({}); // Fetch blogs

        if (!blogs.length) {
            return NextResponse.json({
                message: 'No blogs found',
                success: true,
                blogs: [],
            }, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', // Disable caching
                    'Pragma': 'no-cache', // HTTP 1.0
                    'Expires': '0', // Proxies
                },
            });
        }

        // Log the fetched blogs to check the output
        console.log("Fetched blogs:", blogs);

        return NextResponse.json({
            message: 'Blogs fetched successfully',
            success: true,
            blogs,
        }, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', // Disable caching
                'Pragma': 'no-cache', // HTTP 1.0
                'Expires': '0', // Proxies
            },
        });
    } catch (err) {
        console.error("Error fetching blogs:", err);
        return NextResponse.json(
            { message: 'Internal server error', error: err.message },
            { status: 500 }
        );
    }
}
