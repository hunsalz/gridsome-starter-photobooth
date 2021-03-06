// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome Starter Photobooth",
  siteDescription: "Gridsome Starter Photobooth",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "*.*"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Gridsome Starter Photobooth",
        startUrl: process.env.SITE_URL + process.env.PATH_PREFIX + "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "/manifest.json",
        disableServiceWorker: false,
        serviceWorkerPath: "/service-worker.js",
        cachedFileTypes: "js,json,css,html",
        shortName: "Starter",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "src/assets/images/website-icon.png",
        msTileImage: "",
        msTileColor: "#666600"
      }
    }
  ],

  transformers: {
    // add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
