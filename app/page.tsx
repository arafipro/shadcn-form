import TodoTable from "./components/todo-table";

export default async function Home() {
  const res = await fetch(
    "https://todo-drizzle-api.arafipro.workers.dev/api/todos"
  );
  const todos: Todo[] = await res.json();
  console.log(todos);
  return (
    <main className="">
      <TodoTable todos={todos} />
    </main>
  );
}
