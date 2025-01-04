import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col px-20 py-10">
      <div className="flex flex-col gap-y-4 max-w-[605px]">
        <h1 className="text-4xl font-bold">About</h1>
        <div>
          <h2 className="text-xl font-bold">Name</h2>
          <p className="text-md">Mori Adrian Rosland.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Age</h2>
          <p className="text-md">Continuously increasing.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Where I&apos;m From</h2>
          <p className="text-md">
            A place with plenty of fish and oil. Which part? The place where
            people call us &quot;Nordlending&quot;.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Education</h2>
          <p className="text-md">
            I&apos;m studying for a master&apos;s in Electronic System Design
            with a specialization in Digital and Embedded Systems. Time spent
            programming, is time spent well 🤖.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Bio</h2>
          <p className="text-md">
            My interests can be rather quickly summarized: competitive sports,
            programming, and reading. With this, I am a happy human 😌.
          </p>
          <p>
            I will never say no to a competition 😈 — sports or otherwise 🚀.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Experience / Technical</h2>
          <p className="text-md">
            Most of my programming experience is in <strong>C/C++</strong>{" "}
            writing firmware for embedded systems. Additionally, in my free
            time, I have completed multiple projects with{" "}
            <strong>TypeScript</strong> in <strong>React/Next.js</strong> and{" "}
            <strong>SvelteKit</strong>.
          </p>
          <p className="text-md">
            Hardware-wise, I have a fair share of experience in{" "}
            <strong>VHDL</strong>/<strong>System Verilog</strong> (digital
            design) and some PCB design in <strong>KiCad</strong> and{" "}
            <strong>Altium</strong>.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 py-10">
        <Image
          src="/17mai.jpeg"
          alt="17mai"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
          priority
        />
        <Image
          src="/cycling.jpeg"
          alt="cycling"
          width={300}
          height={300}
          className="object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
          priority
        />
      </div>
    </main>
  );
}
