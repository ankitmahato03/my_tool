import FileUpload from "@/components/InputPage";
import InputPage from "@/components/InputPage";

export default function PdfToJpg() {
  return (
    <div className="bg-gray-300 p-4 m-4">
      <h1>Hello from pdf to jpg</h1>
      <FileUpload path="http://127.0.0.1:8000/jpg-to-pdf" />
    </div>
  );
}
