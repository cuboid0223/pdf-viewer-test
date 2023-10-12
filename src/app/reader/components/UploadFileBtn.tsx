import { pdfToImg } from "@/functions/pdf-to-img";
import Image from "next/image";
import { useState } from "react";
import { usePdfContext } from "@/app/context/PdfContext";
import { PDF_OCR } from "@/app/actions/PDF_OCR";

const UploadFileBtn = () => {
  const FILETYPE = ["application/pdf"];
  const { fileInfo, setFileInfo } = usePdfContext();

  const handleExtractPdf = async (file: File) => {
    if (!file) return;
    try {
      const images = await pdfToImg(file);
      // console.log(images);
      const pages: string[] = [];

      for (let i = 0; i < images.length; i++) {
        const image = images[i];

        // Tesseract.recognize(image, "eng+chi_tra", {
        //   logger: (m) => console.log(m),
        // }).then(({ data: { text } }) => {
        //   console.log(text);
        //   pages.push(text);
        // });

        // extractTextFromImg(image);
      }

      return pages;
    } catch (error) {
      console.error("Error extracting PDF:", error);
    }
  };

  // pdf 上傳預覽
  const handleFilePreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;

    const file = files[0];
    const isFileValid = FILETYPE.includes(file.type);
    if (isFileValid) {
      // Blob to uint8Array
      const uint8Arr = new Uint8Array(await file.arrayBuffer());
      setFileInfo({ ...fileInfo, file: uint8Arr, fileName: file.name });
    }
  };

  return (
    <form action={() => PDF_OCR()}>
      <input type="file" accept=".pdf" onChange={handleFilePreview} />
      <button type="submit">test</button>
    </form>
  );
};

export default UploadFileBtn;
