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

export function QuestionCard() {
  return (
    <Card className="mt-6 mx-8 bg-slate-300 p-3 rounded-md animate__backInRight">
      {/* <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt=""
          width="50"
        />
      </CardHeader> */}
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
        <Options />
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
