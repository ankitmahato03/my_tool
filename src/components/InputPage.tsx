"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { convertPdfToJpg } from "@/api";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    if (!file) return;
    try {
      const data = await convertPdfToJpg(file);
      setResult(data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
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

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Convert
        </button>

        {result && (
          <pre className="mt-4">{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
