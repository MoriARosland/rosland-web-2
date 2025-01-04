"use client";

import { useState } from "react";
import TableModal from "@/components/ui/modals/TableModal";
import { Project } from "@/lib/types/project";

interface TableItemProps {
  project: Project;
}

export default function TableItem({ project }: TableItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <tr
        onClick={handleClick}
        className="group hover:text-blue-500 hover:cursor-pointer transition-colors duration-200"
      >
        <td className="border px-4 py-2 font-mono text-sm max-h-16 overflow-hidden">
          {project._id}
        </td>
        <td className="border px-4 py-2 font-medium max-h-16 overflow-hidden">
          {project.title}
        </td>
        <td className="border px-4 py-2 max-h-16 overflow-hidden">
          <div className="line-clamp-2">{project.abstract}</div>
        </td>
        <td className="border px-4 py-2 max-h-16 overflow-hidden">
          <div className="line-clamp-2">{project.description}</div>
        </td>
        <td className="border px-4 py-2 max-h-16 overflow-hidden">
          <div className="flex flex-wrap gap-1">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {project.tag}
            </span>
          </div>
        </td>
        <td className="border px-4 py-2 max-h-16 overflow-hidden">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline line-clamp-1"
          >
            {project.github}
          </a>
        </td>
        <td className="border px-4 py-2 max-h-16 overflow-hidden">
          <div className="flex flex-wrap gap-1">
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            )) || "No tech stack specified"}
          </div>
        </td>
      </tr>
      <TableModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
