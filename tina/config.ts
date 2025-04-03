import { amazingTitleBlock } from "@/app/amazing-header/amazing-header.template";
import { beautifulImageBlock } from "@/app/beautiful-image/beautiful-image.template";
import { incredibleBodyBlock } from "@/app/incredible-body/incredible-body";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "my_first_collection",
        label: "My first collection",
        path: "content/first",
        fields: [
          {
            type: "object", // <--- oooohhh, fancy.
            name: "blocks",
            label: "Blocks",
            list: true,
            templates: [amazingTitleBlock, beautifulImageBlock, incredibleBodyBlock], // Templates for days!
          }
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename == "Hello-World") {
              return "/";
            }
          },
        },
      }
    ],
  },
});
