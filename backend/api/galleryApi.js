const galleryService = require("./../services/galleryService.js");
exports.api = function (app) {
  app.post("/gallery", async (req, res) => {
    const result = await galleryService.gallery(
      req.body.galleryId,
      req.body.section,
      req.body.sort,
      req.body.window,
      req.body.showViral
    );
    if (result) {
      res.send({ gallery: result.data });
    }
  });
};
