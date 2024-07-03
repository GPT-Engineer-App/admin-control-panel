import React from "react";
import { Spinner } from "@/components/ui/spinner";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Spinner className="h-12 w-12 text-white" />
    </div>
  );
};

export default LoadingOverlay;