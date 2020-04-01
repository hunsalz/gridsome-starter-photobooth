// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  "503354087486-fu79g65a79u7uptktum6uhmbmk17gm9a.apps.googleusercontent.com",
  "1Y_ghcxquSFM8qAWYbBbTZim",
  "http://mydomain.com:8080/auth/google/callback"
);

const scopes = [
  "https://www.googleapis.com/auth/photoslibrary.readonly",
  "profile"
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  scope: scopes
});

const apiEndpoint = "https://photoslibrary.googleapis.com";

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    

    console.log('URL', url);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
