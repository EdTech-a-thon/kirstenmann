const server = Bun.serve({
  port: 8000,
  hostname: "0.0.0.0",
  fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname === "/" ? "/kirstens-trial-run/index.html" : url.pathname;
    const file = Bun.file(`.${pathname.endsWith("/") ? `${pathname}index.html` : pathname}`);

    if (!file.size) {
      return new Response("Page not found", { status: 404 });
    }

    return new Response(file);
  }
});

console.log(`Website ready at ${server.url}`);
