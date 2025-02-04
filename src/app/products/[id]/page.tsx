export default async function Product({ params }: { params: { id: string } }) {
    const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product</h1>
          <p className="leading-relaxed">Product ID: {id}</p>
        </div>
      </div>
    </div>
  )
}`  `