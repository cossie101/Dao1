import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xFC54eCFE59Df20D48F7AA8fFB9c514985a99911e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "blockchain101",
        description: "This NFT will give you access to blockchain101DAO!",
        image: readFileSync("scripts/assets/moon.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()