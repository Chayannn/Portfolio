import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "2u7bbpmo",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skwBf6pYMyFMsRdXEparffUqo0FtFxBJtAzQHOnIURpFLo6Ov6QUgpiUUm3dOPmbHaJvhqus6gMC99K4FuSMvKLBz6j7KmZB1p7QQH2sfE3hkrf22OsP8w7rfaS2HVuyO9E8wfj3rwn3YlBx8zaxd7SpcgZ1UoHAlVP2u6zT6Pynhd80eHzw",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
