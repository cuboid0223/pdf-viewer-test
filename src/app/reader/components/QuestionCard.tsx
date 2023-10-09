"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Options } from "./Options";
import Image from "next/image";
import { usePdfContext } from "@/app/context/PdfContext";
import { useEffect, useState } from "react";
import "animate.css";
type propType = { info: Question };

export function QuestionCard({ info }: propType) {
  const { fileInfo, setFileInfo } = usePdfContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // show card when currentPage === info.forPage
    const isVisible = fileInfo?.currentPage === info.forPage;
    setIsVisible(isVisible);
  }, [fileInfo?.currentPage]);

  return (
    <Card
      className={`${
        isVisible ? "animate__backInRight" : "animate__fadeOut"
      } mt-6 mx-8 bg-slate-300 p-3 rounded-md  animate__animated  h-fit`}
    >
      {/* <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt=""
          width="50"
        />
      </CardHeader> */}
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {info.description}
        </Typography>
        <Options opts={info.options} />
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
