"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  const [form, setForm] = useState({ title: "", author: "", content: "" });

  const onPublish = async () => {
    console.log(form);
    try {
      const response = await fetch("/api/blogs/newblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog published successfully", data);
        setForm({ title: "", content: "", author: "" });
      }
    } catch (err) {
      console.log("Error while publishing", err);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <div className="flex items-center justify-center py-6">
        <div className="flex flex-col justify-between w-11/12 md:w-10/12">
          <div>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col space-y-1.5 w-1/2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          name="title"
                          value={form.title}
                          placeholder="Title of your blog"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5 w-1/2">
                        <Label htmlFor="author">Author</Label>
                        <Input
                          name="author"
                          value={form.author}
                          placeholder="Author name"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        name="content"
                        value={form.content}
                        placeholder="Type your blog content here."
                        className="min-h-52"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={onPublish}>Publish</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
