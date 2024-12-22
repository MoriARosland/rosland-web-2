export default function TypeWriterHeader({
  text,
  typingDuration = 1.5,
}: {
  text: string;
  typingDuration?: number;
}) {
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
