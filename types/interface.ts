import { Message } from "ai";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface RequestBody {
  id: string;
  messages: Array<Message>;
}

export type { Todo, RequestBody };
