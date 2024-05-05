import TodoForm from "./components/todo-form";
import TodoTable from "./components/todo-table";

export default async function Home() {
  const res = await fetch(
    "https://todo-drizzle-api.arafipro.workers.dev/api/todos",
    {
      cache: "no-store",
    }
  );
  const todos: Todo[] = await res.json();
  console.log(todos);
  return (
    <main className="">
      <TodoForm />
      <TodoTable todos={todos} />
    </main>
  );
}
