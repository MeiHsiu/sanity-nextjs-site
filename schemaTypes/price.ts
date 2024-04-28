// schemas/price.ts

import { IoPricetagsOutline } from "react-icons/io5";

const price = {
  name: "price",
  title: "Price",
  type: "document",
  icon: IoPricetagsOutline,
  fields: [
    {
      name: "name",
      title: "Program Name",
      type: "string",
      description: "What is the name of the program?",
    },
    {
      name: "description",
      title: "Program Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Write a brief description about this program",
    },
  ],
};

export default price;
