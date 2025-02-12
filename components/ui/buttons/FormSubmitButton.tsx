"use client";

import { useFormStatus } from "react-dom";

export function FormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary mt-4" type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
