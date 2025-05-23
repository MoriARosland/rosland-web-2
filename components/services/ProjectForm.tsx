import Form from "next/form";
import clientPromise from "@/lib/mongodb";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "@/components/ui/buttons/FormSubmitButton";

export default async function ProjectForm() {
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

    await db.collection("projects").insertOne(projectData);

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
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Abstract</span>
        <textarea
          className="textarea textarea-bordered h-24"
          name="abstract"
          placeholder="Abstract"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Description</span>
        <textarea
          className="textarea textarea-bordered h-32"
          name="description"
          placeholder="Description"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Tag</span>
        <input
          className="input input-bordered"
          type="text"
          name="tag"
          placeholder="Tag"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">GitHub URL</span>
        <input
          className="input input-bordered"
          type="url"
          name="github"
          placeholder="GitHub Repository URL"
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-bold">Tech Stack</span>
        <input
          className="input input-bordered"
          type="text"
          name="techStack"
          placeholder="Technologies (comma-separated)"
          required
        />
      </label>
      <FormSubmitButton />
    </Form>
  );
}
