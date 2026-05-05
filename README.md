# API-Entregas

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 20+
- npm
- Docker

### Instalação

Clone o repositório:
```bash
git clone https://github.com/ThiagoPavanelloDalazen/API-Entregas.git
cd API-Entregas
```

Instale as dependências:
```bash
npm install
```

Configure as variáveis de ambiente:
```bash
cp .env-example .env
# Edite o .env com seus valores
```

Suba o banco de dados:
```bash
docker compose up -d
```

Execute as migrations:
```bash
npx prisma migrate dev
```

Rode o projeto:
```bash
npm run dev
```

### Dependências utilizadas
- Express 4.19.2
- TypeScript 5.5.4
- tsx 4.16.2
- Zod 3.23.8
- express-async-errors 3.1.1
- Prisma 5.19.1

### Banco de dados
- PostgreSQL (via Docker + Bitnami)
- Prisma ORM