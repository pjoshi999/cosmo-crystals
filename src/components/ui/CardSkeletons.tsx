"use client";
import React from "react";
import Skeleton from "./Skeleton";

export const CategorySkeleton = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <Skeleton className="h-48 md:h-56 lg:h-64 rounded-none" />
    <div className="p-6">
      <Skeleton className="h-7 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const ProductSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <Skeleton className="h-64 rounded-none" />
    <div className="px-6 py-3 pb-4">
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <div className="flex items-end gap-3 pt-1">
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-5 w-16" />
      </div>
    </div>
  </div>
);

export const MinimalCategorySkeleton = () => (
  <div className="border-2 border-[#D1D5DB] w-full h-auto py-3 rounded-xl flex flex-col justify-center items-center gap-3">
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-10 w-10 rounded-full" />
  </div>
);

export const FilterSkeleton = () => (
  <div className="space-y-6">
    <div>
      <Skeleton className="h-6 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full" />
    </div>
    {[1, 2].map((i) => (
      <div key={i} className="space-y-3">
        <Skeleton className="h-5 w-1/3 mb-2" />
        {[1, 2, 3].map((j) => (
          <div key={j} className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    ))}
  </div>
);
