import Link from "next/link";
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Image
        src="/404-monster.jpg"
        alt="Not Found Illustration"
        width={400}
        height={400}
      />

      <Link href="/">
        <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
}
