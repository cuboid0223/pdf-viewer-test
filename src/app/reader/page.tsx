"use client";
import React from "react";
import Reader from "./components/Reader";
import UploadFileBtn from "./components/UploadFileBtn";
import PdfContextProvider from "@/app/context/PdfContext";
import { QuestionCard } from "./components/QuestionCard";
import Split from "react-split";
import "animate.css";
function page() {
  const Questions = [1, 3, 4, 5, 6, 7, 9, 0, 2];
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
            <div className="flex-column items-center  justify-center overflow-auto  touch-pan-y snap-y snap-mandatory">
              {Questions.map((id, q) => (
                <div
                  className="snap-always snap-center "
                  key={id}
                >
                  <QuestionCard />
                </div>
              ))}
            </div>
          </Split>
        </div>
      </PdfContextProvider>
    </>
  );
}

export default page;
