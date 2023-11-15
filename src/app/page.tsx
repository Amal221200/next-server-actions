import prisma from "@/lib/db";
import { create, deleteTodo, editTodo } from "@/lib/serverActions";

async function getTodos() {
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

export default async function Home() {

  


  const todos = await getTodos()
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className='border rounded-lg shadow-xl p-10 w-[30vw]'>
        <form className="flex flex-col" action={create} >
          <input type="text" name='input' className='border p-1 border-gray-800 rounded' />
          <button type="submit" className='bg-green-500 rounded-lg mt-2 text-white py-2'>Submit</button>
        </form>

        <ul className="mt-5 flex flex-col gap-y-2">
          {todos.map((todo) => (
            <li key={todo.id}>
              <form action={editTodo} className="flex">
                <input type="hidden" name="inputId" value={todo.id} />
                <input type="text" name="input" defaultValue={todo.input} className="border p-1" />
                <button type="submit" className="border bg-green-400">Save</button>
                <button formAction={deleteTodo} type="submit" className="border bg-red-400">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
