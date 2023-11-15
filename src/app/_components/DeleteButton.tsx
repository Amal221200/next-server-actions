"use client";

import { useFormStatus } from "react-dom";

const DeleteButton = () => {

    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="p-1 rounded bg-red-700 disabled:bg-opacity-70 disabled:cursor-not-allowed" >
            Delete
        </button>
    );
}

export default DeleteButton;