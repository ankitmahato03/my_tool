"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FileUploadProps = {
  path: string; // API endpoint for uploading images
};

export default function FileUpload({ path }: FileUploadProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async () => {
    if (!files || files.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(path, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Error: " + (errorData.error || "Something went wrong"));
        return;
      }

      // Get PDF blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a link to download
      const link = document.createElement("a");
      link.href = url;
      link.download = "converted.pdf";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to convert images.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center max-h-screen">
      <div className="flex gap-2 mt-10">
        <Input
          id="file-upload"
          type="file"
          multiple
          accept=""
          onChange={handleFileChange}
          className="border bg-amber-200"
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Converting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
}
