"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export default function AwesomeContent({data}) {
  const pageData = useTina({
    data: data.data,
    query: data.query,
    variables: data.variables,
  });

  const blocks = pageData.data.my_first_collection.blocks;
  console.log(blocks);

  return (
    <>
    {blocks?.map((block, index) => {
      switch (block.__typename) {
        case "My_first_collectionBlocksTitleBlock":
          return <h1 key={index}>{block.title}</h1>;
        case "My_first_collectionBlocksBodyBlock":
          return <TinaMarkdown key={index} content={block.body} />;
        case "My_first_collectionBlocksImageBlock":
          return <img key={index} src={block.image} />;
      }
    })}
    </>
  );
}