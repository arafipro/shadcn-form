import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TodoTable({ todos }: { todos: Todo[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>todo</TableHead>
          <TableHead>score</TableHead>
          <TableHead>isDone</TableHead>
          <TableHead>createAt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.todo}</TableCell>
            <TableCell>{todo.score}</TableCell>
            <TableCell>{todo.isDone.toString()}</TableCell>
            <TableCell>{todo.createAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
