/** Local preview for the exact static export deployed to GitHub Pages. */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const portIndex = process.argv.indexOf("--port");
const port = Number(
  portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT || 3000,
);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
await stat(resolve(root, "index.html")).catch(() => {
  throw new Error("Run npm run build before starting the static preview.");
});
const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405);
    response.end();
    return;
  }
  let path;
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    path = resolve(root, "." + pathname);
    if (path !== root && !path.startsWith(root + sep)) {
      response.writeHead(403);
      response.end();
      return;
    }
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }
  try {
    const info = await stat(path);
    if (info.isDirectory()) path = resolve(path, "index.html");
    const data = await readFile(path);
    response.writeHead(200, {
      "Content-Type": mime[extname(path)] || "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    const data = await readFile(resolve(root, "404.html")).catch(
      () => "Page not found",
    );
    response.end(request.method === "HEAD" ? undefined : data);
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Static portfolio preview: http://127.0.0.1:${port}`),
);
