"use client";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { buttonVariant } from "@/constants/motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-black text-center px-4">
      <h2 className="text-3xl font-medium mb-4">Something went wrong!</h2>
      <p className="text-sm text-gray-600 mb-8 max-w-md">
        We encountered an unexpected error. Please try again later.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="secondary"
          motionVariants={buttonVariant(0)}
          onClick={() => reset()}
          className="w-auto px-8"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
