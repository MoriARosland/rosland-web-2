"use client";

import { createPortal } from "react-dom";
import { Project } from "@/lib/types/project";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function TableModal({ project, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      id={`project-${project._id}`}
      className="modal"
      onClose={onClose}
    >
      <div className="modal-box">
        {/* Prevent the close button from being focused when the modal is opened */}
        <div tabIndex={-1} autoFocus />

        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="py-4">{project.description}</p>
        <Link
          href={`/nexus/edit/${project._id}`}
          className="btn btn-primary btn-outline"
        >
          Edit Project
        </Link>
      </div>
    </dialog>,
    document.getElementById("main-content") as HTMLElement
  );
}
