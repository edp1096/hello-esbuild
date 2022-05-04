import { build } from 'esbuild'

build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outdir: "dist",
    minify: true,
    sourcemap: true,
    target: "es2021",
    define: { "process.env.NODE_ENV": "developemnt" },
    watch: true
})
    .then(() => console.log("Running esbuild.."))
    .catch(() => process.exit(1))
