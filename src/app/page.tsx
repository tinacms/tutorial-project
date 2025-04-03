"use client";
import { useState, useEffect } from "react";
import { client } from "../../tina/__generated__/client";
import AwesomeContent from "./awesome-content";

export default function Home() {

  const[graphQLresponse, setGraphQLresponse] = useState<any>();

  useEffect(() => {
    // stupid React bullshit to call an async method in useEffect
    const fetchContent = async () => {
      const result = await client.queries.my_first_collection({
        relativePath: "Hello-World.md",
      });
      setGraphQLresponse(result);
    };

    fetchContent();
    
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
        {!graphQLresponse && <p>Loading...</p>}
        {graphQLresponse && <AwesomeContent data={graphQLresponse} />}
      </main>
    </div>
  );
}