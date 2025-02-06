export default async function Review({ params }: { params: { reviewId: string } }) {
    const { reviewId } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Review</h1>
          <p className="leading-relaxed">Review ID: {reviewId}</p>
        </div>
      </div>
    </div>
  )
}`  `