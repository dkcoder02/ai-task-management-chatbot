import { z } from "zod";
import prisma from "@/app/db/prisma";
import { Todo } from "@/types/interface";

export const todoTools = {
  createTask: {
    description: "Create a new task.",
    parameters: z.object({
      title: z.string().describe("Title of the task"),
    }),
    execute: async ({ title }: { title: string }): Promise<Todo> => {
      try {
        return await prisma.todo.create({
          data: { title },
        });
      } catch (error) {
        throw new Error("Failed to create task");
      }
    },
  },
  getAllTasks: {
    description: "Fetch all tasks list.",
    parameters: z.object({}),

    execute: async (): Promise<Todo[]> => {
      try {
        return await prisma.todo.findMany();
      } catch (error) {
        throw new Error("Failed to fetch task list");
      }
    },
  },
  searchTask: {
    description: "Search for a task.",
    parameters: z.object({
      title: z.string().describe("Title of the task"),
    }),
    execute: async ({ title }: { title: string }): Promise<Todo | null> => {
      try {
        return await prisma.todo.findFirst({
          where: { title: { contains: title } },
        });
      } catch (error) {
        throw new Error("Failed to search task");
      }
    },
  },
  updateTask: {
    description: "Update an existing task.",
    parameters: z.object({
      id: z.number().describe("ID of the task to update"),
      title: z.string().optional().describe("New title of the task"),
    }),
    execute: async ({
      id,
      title,
    }: {
      id: number;
      title?: string;
    }): Promise<Todo> => {
      try {
        const updatedTodo = await prisma.todo.update({
          where: { id },
          data: { title },
        });
        return updatedTodo;
      } catch (error) {
        throw new Error("Failed to update todo");
      }
    },
  },
  deleteTask: {
    description: "Delete a task.",
    parameters: z.object({
      id: z.number().describe("ID of the todo to delete"),
    }),
    execute: async ({
      id,
    }: {
      id: number;
    }): Promise<{ success: boolean; message: string }> => {
      try {
        await prisma.todo.delete({ where: { id } });
        return {
          success: true,
          message: `Todo with ID ${id} has been deleted.`,
        };
      } catch (error) {
        throw new Error("Failed to delete todo");
      }
    },
  },
};
