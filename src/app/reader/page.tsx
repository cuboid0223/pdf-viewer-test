"use client";
import React from "react";
import Reader from "./components/Reader";
import UploadFileBtn from "./components/UploadFileBtn";
import PdfContextProvider from "@/app/context/PdfContext";
import Split from "react-split";
import QuestionList from "./components/QuestionList";

function page() {
  return (
    <>
      <PdfContextProvider>
        <div className=" ">
          <Split
            className="split h-screen flex justify-center"
            minSize={100}
            gutterSize={20}
            snapOffset={10}
          >
            {/* pdf viewer */}
            <div className="overflow-auto  touch-pan-y">
              <UploadFileBtn />
              <Reader />
            </div>

            {/* question cards list  */}
            <QuestionList />
          </Split>
        </div>
      </PdfContextProvider>
    </>
  );
}

export default page;
