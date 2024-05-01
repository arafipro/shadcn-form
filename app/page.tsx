import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Home() {
  const res = await fetch(
    "https://todo-drizzle-api.arafipro.workers.dev/api/todos"
  );
  const todos: Todo[] = await res.json();
  console.log(todos);
  return (
    <main className="">
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
              <TableCell>{todo.isDone}</TableCell>
              <TableCell>{todo.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
