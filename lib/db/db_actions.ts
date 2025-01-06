import { unstable_cache as cache, revalidateTag } from "next/cache";
import { ObjectId } from "mongodb";
import { Project } from "../types/project";
import clientPromise from "@/lib/mongodb";

export const getAllProjects = cache(
  async () => {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    const response = await db.collection("projects").find({}).toArray();

    const projects: Project[] = response.map((project) => ({
      _id: project._id.toString(),
      title: project.title as string,
      abstract: project.abstract as string,
      description: project.description as string,
      tag: project.tag as string,
      github: project.github as string,
      techStack: project.techStack as string[],
    }));

    return projects;
  },
  ["projects"],
  {
    tags: ["projects"],
  }
);

export const getProject = cache(
  async (id: string) => {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);

    const objectId = new ObjectId(id);

    const response = await db.collection("projects").findOne({ _id: objectId });

    if (!response) {
      return null;
    }

    const project: Project = {
      _id: response._id.toString(),
      title: response.title as string,
      abstract: response.abstract as string,
      description: response.description as string,
      tag: response.tag as string,
      github: response.github as string,
      techStack: response.techStack as string[],
    };

    return project;
  },
  ["projects"],
  {
    tags: ["projects"],
  }
);

export const deleteProject = async (id: string) => {
  "use server";
  // TODO: add authentication

  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const objectId = new ObjectId(id);
  await db.collection("projects").deleteOne({ _id: objectId });

  revalidateTag("projects");
};
