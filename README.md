# NAQAA Field Lab API

Backend API scaffold for the NAQAA Field Lab application.

## Requirements

- Node.js
- npm
- Cloudflare account

## Install

`npm install`

## Local development

`npm run dev`

## Check the deployment build

`npm run check`

## Deploy to Cloudflare Workers

`npx wrangler login`
`npm run deploy`

## Endpoints

- GET /health
- GET /api/v1/status

## Production payment requirements

Real USDT TRC20 payments remain disabled until server-side transaction
verification, replay protection, and secure secret management are implemented
and tested. Never store private wallet keys or API secrets in source code.
