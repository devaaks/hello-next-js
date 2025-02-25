export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {

  // Simulate a delay to show the loading spinner
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { slug } = await params;
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-10 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Next.js Documentation</h1>
        <p className="mb-6">
          Welcome to the Next.js documentation page. Here, you will find resources and guides to help you get started with building server-rendered React applications.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Installation</h2>
          <p className="">To install Next.js, use the following command:</p>
          <pre className="bg-gray-500 p-4 rounded mt-2">npx create-next-app@latest my-next-app</pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-6 text-blue-600">
            <li>Server-side rendering (SSR)</li>
            <li>Static site generation (SSG)</li>
            <li>API Routes</li>
            <li>Automatic code splitting</li>
            <li>Optimized performance</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
          <ul className="list-disc pl-6 text-blue-600">
            <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Official Documentation</a></li>
            <li><a href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer">Next.js GitHub Repository</a></li>
            <li><a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">Next.js Learning Resources</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}