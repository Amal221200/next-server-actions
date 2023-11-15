"use client"
import { createTodo } from "@/lib/serverActions";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { useRef } from "react";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className='bg-green-700 rounded-lg mt-2 text-white py-2 disabled:bg-opacity-70 disabled:cursor-not-allowed'>
            Submit
        </button>
    )
}

const AddForm = () => {
    const [state, formAction] = useFormState(createTodo, null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleAction = async (formData: FormData) => {
        formAction(formData);
        formRef.current?.reset()
    }
    return (
        <form className="flex flex-col" action={handleAction} ref={formRef} >
            <input type="text" name='input' className='border p-1 border-gray-800 rounded' />
            <p className="text-red-600">{state as string}</p>
            <SubmitButton />
        </form>
    );
}

export default AddForm;