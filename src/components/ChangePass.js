import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export default function ChangePass({ user }) {
  return (
    <Card className="w-[50%]">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <h3 variant="h3" color="white">
          Sign In
        </h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Old Pass" size="lg" placeholder="Current Password" />
        <Input label="Password" size="lg" placeholder="New Password" />
        <Input label="Password" size="lg" placeholder="Password" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
