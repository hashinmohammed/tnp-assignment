"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { buttonVariant } from "@/constants/motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-black text-center px-4">
      <h1 className="text-4xl font-medium mb-4">404 - Page Not Found</h1>
      <p className="text-sm text-gray-600 mb-8 max-w-md">
        The page you are looking for links to a destination that doesn't exist.
      </p>
      <Link href="/">
        <Button
          variant="secondary"
          motionVariants={buttonVariant(0)}
          className="w-auto px-8"
        >
          Return Home
        </Button>
      </Link>
    </div>
  );
}
