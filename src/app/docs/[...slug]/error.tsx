'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-10 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="mb-6">
          {error.message}
        </p>
        <p className="mb-6">
          If the error persists, please contact the site owner.
        </p>
        <p className="mb-6">
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Learn more about Next.js error handling
          </a>
        </p>
      </div>
    </div>
  );
}