"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const todoSchema = z.object({
  id: z.number().int().positive().min(1),
  todo: z.string().min(2).max(50),
  score: z.number().min(0).max(100),
  isDone: z.boolean(),
  createAt: z.string(),
});

const createTodoSchema = todoSchema.pick({ todo: true });

export default function TodoForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof createTodoSchema>>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      todo: "",
    },
  });
  async function onSubmit(values: z.infer<typeof createTodoSchema>) {
    await fetch("https://todo-drizzle-api.arafipro.workers.dev/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    router.refresh();
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo</FormLabel>
              <FormControl>
                <Input placeholder="todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">登録</Button>
      </form>
    </Form>
  );
}
