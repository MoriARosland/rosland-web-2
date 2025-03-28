// Note: Should only be used inside "loading.tsx" files.
export default function LoadingSpinner() {
  return (
    <main className="grid place-items-center h-[80vh] px-20">
      <span className="loading loading-bars loading-lg"></span>
    </main>
  );
}
