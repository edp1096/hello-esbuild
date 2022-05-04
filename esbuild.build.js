import { build } from 'esbuild'

build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    minify: true,
    sourcemap: true,
    target: "es2020",
    // define: { "process.env.NODE_ENV": "production" }
    define: { "process.env.NODE_ENV": "developemnt" }
})
