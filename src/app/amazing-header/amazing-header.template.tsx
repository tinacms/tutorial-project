import { Template } from "tinacms";

export const amazingTitleBlock: Template = {
    name: 'titleBlock',
    label: 'Amazing title',
    fields: [
      {
        type: 'string',
        label: 'Title',
        name: 'title',
      }
    ],
  }