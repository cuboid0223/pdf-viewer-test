"use client";

import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export function Options() {
  const OPTIONS = ["A", "B", "C", "D"];

  return (
    <>
      <Card className="rounded-md">
        <List>
          {OPTIONS.map((id, opt) => (
            <ListItem className="p-0" key={id}>
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name="vertical-list"
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    crossOrigin="anonymous"
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  {OPTIONS[opt]}
                </Typography>
              </label>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}
