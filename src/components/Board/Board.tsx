import { Card, CardContent } from "../ui/card";
import CreateNewColumn from "./CreateNewColumn";

export default function Board() {

  const columns = [
    { id: 1, name: "todo", index: 1 },
    { id: 2, name: "ongoing", index: 2 },
    { id: 3, name: "done", index: 3 },
  ]

  return (
    <div className="flex space-x-3 px-2">
      {columns.map(column => (
        <Card className="w-[14rem] h-[25rem] p-1.5 space-y-2">
          <p>{column.name}</p>
          <Card className="px-1.5 py-3">
            <p className="w-full">
              do breakfast
            </p>
          </Card>
          <Card className="px-1.5 py-3">
            <p>
              do lunch
            </p>
          </Card>
        </Card>
      ))}

      <CreateNewColumn />
    </div>
  );
}
