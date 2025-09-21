import Image from "next/image";
import nasjonaldag from "@/public/nasjonaldag.jpeg";
import cycling from "@/public/cycling.jpeg";

export default function About() {
  return (
    <main className="flex flex-col px-10 py-10 items-center">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="flex flex-col gap-y-4">
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
              MSc in Electronic System Design (electrical engineering) with a
              specialization in Digital and Embedded Systems.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Bio</h2>
            <p className="text-md">Trying not to be replaced by a robot.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Experience / Technical</h2>
            <p className="text-md">
              I&apos;ve done extensive proramming in <strong>C/C++</strong>{" "}
              writing firmware for embedded systems. This includes real-time
              programming, low-power systems, and some parallel computing. In my
              free time, I&apos;ve built a variety of full-stack web and mobile
              applications such as asset trackers to training apps using{" "}
              <strong>Next.js</strong>, <strong>Postgres</strong>, and{" "}
              <strong>Flutter</strong>.
            </p>
            <p className="text-md pt-2">
              In hardware, I have experience with FPGA and digital design
              building accelerators in <strong>VHDL</strong>/
              <strong>Verilog</strong> and verifying these with{" "}
              <strong>SystemVerilog/UVM</strong>. For PCB design, I have built
              boards ranging from small passive circuits to power delivery
              systems and wireless communication systems.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 py-10">
          <Image
            src={nasjonaldag}
            alt="nasjonaldag"
            width={3024}
            height={4032}
            priority={true}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="max-w-[300px] h-auto object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
          />
          {/* Fetch priority set high for the cycling image since it is LCP */}
          <Image
            src={cycling}
            alt="cycling"
            width={3024}
            height={4032}
            priority={true}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="max-w-[300px] h-auto object-cover rounded-lg shadow-md shadow-black/25 dark:shadow-white/25"
          />
        </div>
      </div>
    </main>
  );
}
