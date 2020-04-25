const apiclient = require("../utility/apiclient.js");
const galleryEndpoint = "gallery";

exports.gallery = async function (
  galleryId,
  section = "hot",
  sort = "viral",
  window = "day",
  showViral = "true"
) {
  section = section || "hot";
  sort = sort || "viral";
  window = window || "day";
  showViral = showViral || "true";
  return await apiclient.instance.get(
    `${galleryEndpoint}/${section}/${sort}/${window}/${galleryId}.json?showViral=${showViral}`
  );
};
