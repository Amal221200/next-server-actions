import { deleteTodo, editTodo, getTodos } from "@/lib/serverActions";
import SaveButton from "./_components/SaveButton";
import DeleteButton from "./_components/DeleteButton";
import AddForm from "./_components/AddForm";

const BetterExample = async () => {
    const todos = await getTodos();

    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <div className='border border-slate-800 rounded-lg shadow-xl shadow-slate-950 p-10 w-[30vw]'>
                <AddForm />

                <ul className="mt-5 flex flex-col gap-y-2">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex gap-2">
                            <form className="flex gap-2" action={editTodo}>
                                <input type="hidden" name="inputId" value={todo.id} />
                                <input type="text" name="input" defaultValue={todo.input} className="border border-slate-800 p-1 rounded" />
                                <SaveButton />
                            </form>
                            <form action={deleteTodo}>
                                <input type="hidden" name="inputId" value={todo.id} />
                                <DeleteButton />
                            </form>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default BetterExample;