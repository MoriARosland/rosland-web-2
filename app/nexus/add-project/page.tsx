import Form from "next/form";

export default function AddProject() {
  async function handleAddProject(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
    const tags = formData.get("tags");

    console.log(title, description, tags);
  }

  return (
    <main className="flex flex-col items-center flex-1 py-5 px-20">
      <h1 className="text-4xl font-bold mb-8">Add Project</h1>
      <Form className="flex flex-col gap-4" action={handleAddProject}>
        <input
          className="input input-bordered"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="input input-bordered"
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          className="input input-bordered"
          type="text"
          name="tags"
          placeholder="Tags"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </Form>
    </main>
  );
}
