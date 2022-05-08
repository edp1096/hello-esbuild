// import { build } from 'esbuild'

require('esbuild').serve({
    servedir: './',
    port: 8000,
}, {
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    minify: true,
    sourcemap: true,
    target: "es2020",
    format: "esm",
    define: { "process.env.NODE_ENV": "developemnt" },
    // watch: true
})
    .then(() => { console.log("Running server on http://localhost:8000") })
    .catch(() => process.exit(1))
