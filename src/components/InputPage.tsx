"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function FileUpload() {
  return (
    <div className="flex flex-col justify-center items-center max-h-screen">
      <div className="flex gap-2 mt-10">
        <Input
          id="file-upload"
          type="file"
          accept="application/pdf"
          className="border bg-amber-200"
        />

        <Button>submit</Button>
        {
          <Button>
            <a download="converted.jpg">Download</a>
          </Button>
        }
      </div>
    </div>
  );
}
