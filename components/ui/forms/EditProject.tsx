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
      description: formData.get("description")?.toString().trim(),
      tag: formData.get("tag")?.toString().trim(),
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
    <Form className="flex flex-col gap-4 p-10" action={handleFormSubmit}>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Title</span>
        <input
          className="input input-bordered w-fit"
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={project.title}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Description</span>
        <input
          className="input input-bordered w-fit"
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={project.description}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Tag</span>
        <input
          className="input input-bordered w-fit"
          type="text"
          name="tag"
          placeholder="Tag"
          defaultValue={project.tag}
          required
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Update
      </button>
    </Form>
  );
}
