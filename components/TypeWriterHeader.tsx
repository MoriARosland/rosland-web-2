export default function TypeWriterHeader({ text }: { text: string }) {
  const typingDuration = 1.5; // seconds

  return (
    <div className="inline-block">
      <h1
        style={
          {
            "--character-count": text.length,
            "--typing-duration": `${typingDuration}s`,
          } as React.CSSProperties
        }
        className={`text-4xl overflow-hidden w-full whitespace-nowrap border-r-4 border-black dark:border-white animate-typewriter`}
      >
        {text}
      </h1>
    </div>
  );
}
