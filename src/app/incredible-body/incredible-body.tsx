import { Template } from "tinacms";

export const incredibleBodyBlock: Template = {
    name: 'bodyBlock',
    label: 'Incredible Body',
    fields: [
      {
        type: 'rich-text',
        label: 'Body',
        name: 'body',
      }
    ],
  }