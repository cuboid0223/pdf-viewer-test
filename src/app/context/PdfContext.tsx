"use client";
import React, { createContext, useContext, useState } from "react";

type PdfContextProviderProps = {
  children: React.ReactNode;
};

type pdf = Uint8Array | null;

type PdfContext = {
  file: pdf;
  setFile: React.Dispatch<React.SetStateAction<pdf>>;
};

type fileInfo = {
  file: pdf;
  currentPage?: number;
};

export const PdfContext = createContext<PdfContext | null>(null);

export default function PdfContextProvider({
  children,
}: PdfContextProviderProps) {
  const [file, setFile] = useState<fileInfo | null>(null);
  return (
    <PdfContext.Provider value={{ file, setFile }}>
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
