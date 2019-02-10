export default function(part) {
  let {
    store,
    macro,
    Point,
    Path,
    points,
    paths,
    complete,
    paperless,
    snippets,
    Snippet,
    sa,
    options,
    measurements
  } = part.shorthand();

  if (!options.pocket) return part;

  // Clear paths, apart from the pocket
  for (let p of Object.keys(paths)) delete paths[p];

  // Paths
  paths.seam = new Path()
    .move(points.cfHem)
    .line(points.pocketHem)
    .line(points.pocketTip)
    .curve_(points.pocketTipCp2, points.pocketTopRight)
    .line(points.pocketCfTop)
    .line(points.cfHem)
    .close()
    .attr("class", "fabric");

  // Complete?
  if (complete) {
    points.logo = points.pocketCfTop.shiftFractionTowards(
      points.pocketHem,
      0.3
    );
    points.title = points.pocketCfTop.shiftFractionTowards(
      points.pocketHem,
      0.5
    );
    snippets.logo = new Snippet("logo", points.logo);
    macro("title", {
      at: points.title,
      nr: 4,
      title: "pocket"
    });
    if (sa) {
      paths.sa = paths.seam.offset(sa).attr("class", "fabric sa");
    }
  }

  // Paperless?
  if (paperless) {
    macro("hd", {
      from: points.cfHem,
      to: points.pocketHem,
      y: points.cfHem.y + sa + 15
    });
    macro("hd", {
      from: points.cfHem,
      to: points.pocketTip,
      y: points.cfHem.y + sa + 30
    });
    macro("hd", {
      from: points.pocketCfTop,
      to: points.pocketTopRight,
      y: points.pocketCfTop.y - sa - 15
    });
    macro("vd", {
      from: points.cfHem,
      to: points.pocketCfTop,
      x: points.cfHem.x - sa - 15
    });
    macro("vd", {
      from: points.pocketHem,
      to: points.pocketTip,
      x: points.pocketTip.x + sa + 15
    });
  }

  return part;
}