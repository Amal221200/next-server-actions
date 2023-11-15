"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function getTodos() {
    const todos = await prisma.todo.findMany({
        select: {
            id: true,
            // createdAt: true,
            input: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return todos;
}


export async function create( formData: FormData) {
    const input = formData.get('input') as string;

    await prisma.todo.create({
        data: {
            input
        }
    })
    revalidatePath('/')
}


export async function createTodo(previosState: any, formData: FormData): Promise<"Failed to create a todo." | undefined> {
    try {
        const input = formData.get('input') as string;

        await prisma.todo.create({
            data: {
                input
            }
        })
        revalidatePath('/better')
    } catch (error) {
        return 'Failed to create a todo.'
    }
}

export async function editTodo(formData: FormData) {
    const input = formData.get('input') as string;
    const inputID = formData.get('inputId') as string;

    await prisma.todo.update({
        data: {
            input
        },
        where: {
            id: inputID,
        }
    })
    revalidatePath('/better')
}

export async function deleteTodo(formData: FormData) {
    const inputID = formData.get('inputId') as string;

    await prisma.todo.delete({
        where: {
            id: inputID,
        }
    })
    revalidatePath('/better')
}