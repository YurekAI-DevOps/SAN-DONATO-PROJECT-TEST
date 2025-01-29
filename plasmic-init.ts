import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "jMFg4YiRJGCEgbjX2Mhaje";
export const projectApiToken = "FkPI0WeNK2JavW2KDwawMr6UJct6T7v80LLyvj4MV4zr8FY8BM7lgeLSdtixuBeUWTJsMJI7Q16TZ1MccqBw";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
