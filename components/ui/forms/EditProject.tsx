import { Project } from "@/lib/types/project";
import clientPromise from "@/lib/mongodb";
import Form from "next/form";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";
import { deleteProject } from "@/lib/db/db_actions";
import { redirect } from "next/navigation";

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

    await db
      .collection("projects")
      .updateOne({ _id: new ObjectId(id) }, { $set: projectData });

    revalidateTag("projects");
  }

  async function handleDelete() {
    "use server";
    await deleteProject(project._id);
    console.log("deleted project with id: ", project._id);

    revalidateTag("projects");
    redirect("/nexus");
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
      <div className="flex flex-row gap-4">
        <button className="btn btn-primary mt-4">Update</button>
        <button className="btn btn-error mt-4" formAction={handleDelete}>
          DELETE
        </button>
      </div>
    </Form>
  );
}
