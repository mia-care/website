"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CompetenceCenterSlugRedirect() {
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    router.replace(`/resources/${params.slug}`);
  }, [router, params.slug]);
  return null;
}
