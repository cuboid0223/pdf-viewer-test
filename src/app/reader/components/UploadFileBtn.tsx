"use client";
import Tesseract from "tesseract.js";
import { createWorker } from "tesseract.js";
import { pdfToImg } from "@/functions/pdf-to-img";
import Image from "next/image";
import { useState } from "react";
import { usePdfContext } from "@/app/context/PdfContext";
import extractTextFromImg from "@/functions/extractTextFromImg";

const UploadFileBtn = () => {
  const FILETYPE = ["application/pdf"];
  const { file, setFile } = usePdfContext();

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
      setFile(uint8Arr);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFilePreview} />
    </div>
  );
};

export default UploadFileBtn;
