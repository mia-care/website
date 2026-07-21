"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function CompetenceCenterRedirect() {
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    router.replace(`/resources/${params.slug}`);
  }, [router, params.slug]);
  return null;
}
