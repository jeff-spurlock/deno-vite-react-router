# Devirr

This techstack, which I'm calling Devirr, is based on 3 core pieces; Deno, Vite, and React Router. This is designed to be a simple SPA architecture. It doesn't bother with SSR, it doesn't have SSG or other modern trends. This was born out of a desire to have a simple stack for propping up a fast and reliable SPA. 

## Running

You need to have Deno v2.0.0 or later installed to run this repo.

First start the api server:
```
$deno task api
```

Next start the dev server:
```
$ deno task dev
```

## Deploy
Build production assets:
```
$ deno task build
```
