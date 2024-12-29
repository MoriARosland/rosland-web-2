import Form from "next/form";
import clientPromise from "@/lib/mongodb";

export default function ProjectForm() {
  async function handleFormSubmit(formData: FormData) {
    "use server";

    const projectData = {
      title: formData.get("title")?.toString().trim(),
      description: formData.get("description")?.toString().trim(),
      tag: formData.get("tag")?.toString().trim(),
    };

    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);

    const project = await db.collection("projects").insertOne(projectData);

    console.log(project);
  }

  return (
    <Form className="flex flex-col gap-4" action={handleFormSubmit}>
      <input
        className="input input-bordered"
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <input
        className="input input-bordered"
        type="text"
        name="description"
        placeholder="Description"
        required
      />
      <input
        className="input input-bordered"
        type="text"
        name="tag"
        placeholder="Tag"
        required
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </Form>
  );
}
