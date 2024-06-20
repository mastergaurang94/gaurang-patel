import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/memecoins");
  }, [router]);

  return null;
};

export default Index;
