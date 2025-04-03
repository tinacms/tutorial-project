import { Template } from "tinacms";

export const beautifulImageBlock: Template = {
    name: 'imageBlock',
    label: 'Beautiful Image',
    fields: [
      {
        type: 'image',
        label: 'Image',
        name: 'image',
      }
    ],
  }