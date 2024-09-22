Este é um projeto [Next.js](https://nextjs.org) iniciado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como começar

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a [Geist](https://vercel.com/font), uma nova família de fontes da Vercel.

Além disso, o projeto utiliza [SASS](https://sass-lang.com) para a estilização, oferecendo mais flexibilidade e organização ao CSS, permitindo o uso de variáveis, mixins, e outras funcionalidades avançadas.

## Saiba mais

Para aprender mais sobre Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - explore as funcionalidades e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo sobre Next.js.

Você pode verificar o [repositório no GitHub do Next.js](https://github.com/vercel/next.js) – seu feedback e contribuições são bem-vindos!

## Backend com Prisma e Rotas

O backend deste projeto utiliza o [Prisma](https://www.prisma.io) como ORM para interagir com o banco de dados, facilitando consultas e a manipulação de dados. As rotas da API são gerenciadas por meio do Next.js, permitindo criar uma aplicação full-stack com um único framework.

## Deploy na Vercel

A maneira mais fácil de fazer o deploy de sua aplicação Next.js é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), dos criadores do Next.js.

## Banco de Dados

Como foi utilizado o Prisma, o acesso ao banco de dados é feito por meio de um link de conexão configurado nas variáveis de ambiente do projeto, conforme o env.example
