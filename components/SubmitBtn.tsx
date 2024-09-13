import React from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      onClick={() =>
        pending &&
        setTimeout(() => {
          toast.success("Email Sent Successfully!");
        }, 1000)
      }
      type="submit"
      className="group flex items-center bg-gray-900 hover:bg-gray-950 text-white h-[3rem] w-[8rem]  justify-center rounded-full outline-none gap-2 transition-all hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-gray-800 dark:hover:bg-gray-950"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin h-5 w-5  rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
        </>
      )}
    </button>
  );
}
