import { Project } from "@/lib/types/project";
import clientPromise from "@/lib/mongodb";
import Form from "next/form";
import { ObjectId } from "mongodb";

interface Props {
  project: Project;
}

export default function EditProject({ project }: Props) {
  async function handleFormSubmit(formData: FormData) {
    "use server";

    const projectData = {
      title: formData.get("title")?.toString().trim(),
      abstract: formData.get("abstract")?.toString().trim(),
      description: formData.get("description")?.toString().trim(),
      tag: formData.get("tag")?.toString().trim(),
      github: formData.get("github")?.toString().trim(),
      techStack: formData
        .get("techStack")
        ?.toString()
        .split(",")
        .map((tech) => tech.trim()),
    };

    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);

    const id = new ObjectId(project._id);

    const updatedProject = await db
      .collection("projects")
      .updateOne({ _id: new ObjectId(id) }, { $set: projectData });

    console.log("Updated Project: ", updatedProject);
  }

  return (
    <Form className="flex flex-col gap-4 p-10 w-3/5" action={handleFormSubmit}>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Title</span>
        <input
          className="input input-bordered"
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={project.title}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Abstract</span>
        <textarea
          className="textarea textarea-bordered h-24"
          name="abstract"
          placeholder="Abstract"
          defaultValue={project.abstract}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Description</span>
        <textarea
          className="textarea textarea-bordered  h-32"
          name="description"
          placeholder="Description"
          defaultValue={project.description}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Tag</span>
        <input
          className="input input-bordered "
          type="text"
          name="tag"
          placeholder="Tag"
          defaultValue={project.tag}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">GitHub URL</span>
        <input
          className="input input-bordered "
          type="url"
          name="github"
          placeholder="GitHub Repository URL"
          defaultValue={project.github}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Tech Stack</span>
        <input
          className="input input-bordered "
          type="text"
          name="techStack"
          placeholder="Technologies (comma-separated)"
          defaultValue={project.techStack?.join(", ") || ""}
          required
        />
      </label>
      <button className="btn btn-primary mt-4" type="submit">
        Update
      </button>
    </Form>
  );
}
