import Image from 'next/image';

export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden md:flex">
          {/* Product Image */}
          <div className="md:flex-shrink-0">
            <Image
              className="h-64 w-full object-cover md:h-full md:w-64"
              src="/product.png"
              alt="Product Image"
            />
          </div>
  
          {/* Product Details */}
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
              Electronics {productId}
            </div>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">Wireless Electronics</h2>
            <p className="mt-2 text-gray-600">
              High-quality noise-canceling headphones with an immersive sound experience.
            </p>
  
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900">$299.99</span>
            </div>
  
            <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}
