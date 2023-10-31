<p>
    <img src="public/alphagpt.png"/>
</p>
<h1>An AI Platform with Next.js 14, React 18, TailwindCSS, Hanko, Supabase, Bun, Prisma, Typescript, Shadcn UI<h1></h1>

Features:

- [Hanko Authentication](https://hannko.io)
- [Bun](https://bun.sh) (Javascript runtime)
- [Tailwind design](https://tailwindcss.com/)
- Tailwind animations and effects with [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)
- Full responsiveness
- Client form validation and handling using react-hook-form
- Server error handling
- [Image Generation Tool](https://openai.com/api) (Open AI)
- [Video Generation Tool](https://replicate.com) (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Free tier with API limiting
- [Supabase](https://supabase.com/) integration
- Folder structure in Next 14 App Router


### Prerequisites

**Bun**

### Cloning the repository

```shell
git clone https://github.com/akins-dev/Hanko-Project.git
```

### Install packages

```shell
make setup
```

### Setup .env file
Rename `.env.local.example` to `.env` and add the following:


```js
NEXT_PUBLIC_HANKO_API_URL=""

OPENAI_API_KEY=""

REPLICATE_API_TOKEN=""

# Connect to Supabase with PgBouncer.
DATABASE_URL="postgres://postgres:__PASSWORD__@db.__YOUR_SUPABASE_PROJECT__.supabase.co:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations.
DIRECT_URL="postgres://postgres:__PASSWORD__@db.__YOUR SUPABASE_PROJECT__.supabase.co:5432/postgres"

```

### Setup Prisma

Add PosgreSQL Database (I used `supabase`)

```shell
bunx prisma db push

```

### Start the app

```shell
bun run dev
```

## Available commands

Running commands with npm `bun run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Important!

make sure you use `localhost:3000` as your website url when creating a new project with [hanko](https://cloud.hanko.io/)
