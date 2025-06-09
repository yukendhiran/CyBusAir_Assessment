# API Documentation

## Endpoints

All endpoint prefixed with `api/v1/`

Structure of Product

{
id: string;
name: string;
price: number;
description: string | null;
}

Id is auto generated using uuid

## Banckend structure

It have clear separation

```bash
├── app.ts
├── controllers
│   ├── index.ts
│   └── product.controller.ts
├── dist/
├── index.ts
├── models
│   ├── index.ts
│   └── product.models.ts
├── package.json
├── package-lock.json
├── README.md
├── router
│   ├── index.ts
│   └── product.router.ts
├── tsconfig.json
└── utils
    └── logger.ts
```

### GET products `/products`

Returns a list of all products.

### GET product by ID `/products/:id`

Returns a single product

### POST product `/products`

Create new product

### DELETE product `/products/:id`

Delete the product
