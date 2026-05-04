"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CompetenceCenterRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resources");
  }, [router]);
  return null;
}
