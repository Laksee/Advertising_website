// Generic read-only controller factory for the demo content collections
// (services, stats, case studies, testimonials, faqs, process steps).
// All of these follow the same shape: fetch everything, sorted by `order`/`step`.

function makeContentController(Model, sortField = "order") {
  return async function getAll(req, res, next) {
    try {
      const items = await Model.find().sort({ [sortField]: 1 });
      res.json({ success: true, count: items.length, data: items });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = makeContentController;
