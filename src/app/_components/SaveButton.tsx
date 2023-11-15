"use client";

import { useFormStatus } from "react-dom";

const SaveButton = () => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending} className="p-1 rounded bg-green-700 disabled:bg-opacity-70 disabled:cursor-not-allowed">
            Save
        </button>
    );
}

export default SaveButton;