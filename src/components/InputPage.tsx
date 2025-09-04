"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { convertPdfToJpg } from "@/api";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  const handleSubmit = async () => {
    if (!file) return;
    try {
      const blob = await convertPdfToJpg(file);
      setImageBlob(blob);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleDownload = () => {
    if (!imageBlob) return;
    const url = window.URL.createObjectURL(imageBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.jpg";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-center items-center max-h-screen">
      <div className="flex gap-2 mt-10">
        <Input
          id="file-upload"
          type="file"
          accept="application/pdf"
          className="border bg-amber-200"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <Button onClick={handleSubmit} className="ml-2">
          Convert
        </Button>
      </div>

      {imageBlob && (
        <Button
          onClick={handleDownload}
          className="mt-4 bg-green-500 text-white"
        >
          Download JPG
        </Button>
      )}
    </div>
  );
}
