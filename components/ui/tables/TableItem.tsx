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
        <td className="border px-4 py-2 font-mono text-sm">{project._id}</td>
        <td className="border px-4 py-2 font-medium">{project.title}</td>
        <td className="border px-4 py-2">{project.description}</td>
        <td className="border px-4 py-2">
          <div className="flex flex-wrap gap-1">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {project.tag}
            </span>
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
