import TypeWriterHeader from "@/components/TypeWriterHeader";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
      <TypeWriterHeader text="Hi there, I'm Mori👋" />
      <p className="text-lg text-center px-20">
        I study Electronic System Design with a specialisation in digital and
        embedded systems at NTNU and am currently in my 4th year.
      </p>
    </main>
  );
}
