"use client";
import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

type Props = {};

function CreateNewColumn({}: Props) {
  type ColumnName = { columnName: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ColumnName>();
  const onSubmit = (data: ColumnName) =>
    console.log("New Column Name: " + data.columnName);
  return (
    <div>
      <Card className="p-1.5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1.5">
          <label htmlFor="columnName">Column name: </label>
          <Input type="text" {...register("columnName")} id="columnName" />
          <Button className="w-full" type="submit">
            Add column
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default CreateNewColumn;
