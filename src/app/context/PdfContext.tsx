"use client";
import React, { createContext, useContext, useState } from "react";

type PdfContextProviderProps = {
  children: React.ReactNode;
};



type PdfContext = {
  fileInfo: fileInfo | null;
  setFileInfo: React.Dispatch<React.SetStateAction<fileInfo | null>>;
};

type fileInfo = {
  currentPage?: number;
  n_page?: number; // pdf total page
  fileName?: string;
  file: pdf;
  // ...
};

export const PdfContext = createContext<PdfContext | null>(null);

export default function PdfContextProvider({
  children,
}: PdfContextProviderProps) {
  const [fileInfo, setFileInfo] = useState<fileInfo | null>(null);

  // for test
  // console.log(fileInfo);
  return (
    <PdfContext.Provider value={{ fileInfo, setFileInfo }}>
      {children}
    </PdfContext.Provider>
  );
}

export function usePdfContext() {
  const context = useContext(PdfContext);
  if (!context) {
    throw new Error("usePdfContext must be used within  a PdfContextProvider");
  }
  return context;
}
