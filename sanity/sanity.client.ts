// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "yg4pbgtv",
  dataset: "production",
  apiVersion: "2024-04-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
