This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Railway

This project is configured to deploy on [Railway](https://railway.app):

- `railway.json` pins the Nixpacks builder, `npm run build`, and `npm run start`.
- `start` binds to `0.0.0.0` and reads Railway's `$PORT` (`next start -H 0.0.0.0 -p ${PORT:-3000}`).
- Node is pinned to 20 via `.nvmrc` / `engines`.

To deploy: create a new Railway project from this repo. Railway auto-detects the
config and serves the app — no extra environment variables are required.

For other targets, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
