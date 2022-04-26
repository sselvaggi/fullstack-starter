import { Parcel } from "@parcel/core";
const NODE_PARCEL_PORT = process.env.NODE_PARCEL_PORT ?? 3000;
export default new Parcel({
  entries: "./src/ui/index.html",
  defaultConfig: "@parcel/config-default",
  serveOptions: {
    port: NODE_PARCEL_PORT,
  },
  hmrOptions: {
    port: NODE_PARCEL_PORT,
  },
});
