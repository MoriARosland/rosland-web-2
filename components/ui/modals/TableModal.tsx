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
        <div tabIndex={-1} autoFocus />
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold">{project.title}</h3>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Project ID: {project._id}</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Abstract</h4>
          <p className="py-2">{project.abstract}</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Description</h4>
          <p className="py-2">{project.description}</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Tag</h4>
          <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-1 inline-block">
            {project.tag}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">GitHub</h4>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {project.github}
          </a>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
              >
                {tech}
              </span>
            )) || "No tech stack specified"}
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/nexus/edit/${project._id}`}
            className="btn btn-primary btn-outline"
          >
            Edit Project
          </Link>
        </div>
      </div>
    </dialog>,
    document.getElementById("main-content") as HTMLElement
  );
}
