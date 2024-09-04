"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Feed = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs);
          console.log("Blogs fetched successfully:", data.blogs);
        } else {
          console.log("Failed to fetch blogs");
        }
      } catch (err) {
        console.log("Error while fetching the blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <div className="flex items-center justify-center py-6">
        <div className="flex flex-col justify-between w-11/12 md:w-10/12 gap-3">
          <div className="flex flex-col gap-1">
            <p className="uppercase tracking-widest text-s font-medium">
              Browse and read the latest stuff
            </p>
            <h3 className="text-2xl font-bold">Latest Stories</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="w-lvw max-w-lg overflow-hidden rounded-md"
              >
                <CardHeader className="font-semibold">
                  <h3 className="flex-shrink-0">{blog.title}</h3>
                </CardHeader>
                <CardContent>
                  <CardDescription className="h-20 overflow-hidden">
                    {blog.content}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button
                        variant="link"
                        className="flex items-center gap-1"
                      >
                        Read more{" "}
                        <IoIosArrowRoundForward className="text-xl mt-px" />
                      </Button>
                    </DrawerTrigger>

                    <DrawerContent className="max-h-[95vh]">
                      <DrawerClose
                        asChild
                        className="absolute right-0 top-0 h-10"
                      >
                        <Button
                          variant="custom"
                          className="w-10 h-10 p-1 rounded-none bg-stone-950 text-white"
                        >
                          <IoCloseOutline className="text-3xl" />
                        </Button>
                      </DrawerClose>
                      <div className="mx-auto w-full md:w-11/12 max-w-full h-[85vh] overflow-y-scroll">
                        <DrawerHeader>{blog.author}</DrawerHeader>
                        <DrawerHeader className="space-y-3">
                          <DrawerTitle>{blog.title}</DrawerTitle>
                          <DrawerDescription className="text-justify">
                            {blog.content}
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <h3 className="text-sm">
                            Published on - {formatDate(blog.createdAt)}
                          </h3>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
