<div align='center'>
  <img
    src='docs/zetashort.png'
    alt='Zeta Short logo'
    width='250'
    height='250'
  />
  <br />
  <br />
  <p>
    <img
      alt="GitHub top language"
      src="https://img.shields.io/github/languages/top/kauefraga/zetashort"
    />
    <img
      alt="GitHub Repo stars"
      src="https://img.shields.io/github/stars/kauefraga/zetashort"
    />
    <a href="https://github.com/kauefraga/zetashort/commits/main">
      <img
        alt="GitHub last commit"
        src="https://img.shields.io/github/last-commit/kauefraga/zetashort"
      />
    </a>
    <img
      alt="GitHub LICENSE"
      src="https://img.shields.io/github/license/kauefraga/zetashort"
    />
  </p>
</div>

---

> 🔗 An URL shortener. A simple and reliable solution for users + url shortening.

> [!IMPORTANT]
> 🚧 Work in progress

### Features

## ⬇️ Getting Started

### How to install, build and run it

1. Clone the repository
2. Install dependencies
3. Build and start 😉

```bash
# (1)
git clone https://github.com/kauefraga/zetashort.git
cd zetashort

# (2)
pnpm i --frozen-lockfile

# (3)
pnpm build
pnpm start
```

### Usage

Here's a quick walkthrough:

Want to see a hello world?

```bash
> GET /v1
```

Want to create a user?

```bash
# body { username: string, password: string }
> POST /v1/users -> Token and expiresIn
```

Want to find a specific user?

```bash
> GET /v1/users/:userId -> User
> GET /v1/users/:username -> User
```

Want to list all the stored users? (authorization required)

```bash
# authorization: bearer {token}
> GET /v1/users -> Users list
```

### About the solution

Why did you choose node/typescript?

> I choose node/typescript because i am familiar with it. Patterns, Node, Typescript, PNPM, Express, Prisma, etc. In the future, i may create some similar solution with Golang.

Which dbms did you choose? Why? Did you consider using NoSQL?

> I also choose PostgreSQL ([bitnami/postgresql](https://hub.docker.com/r/bitnami/postgresql)) because of my familiarity with it. Sincerely, I didn't consider using a NoSQL database, but i would strongly recommend them because of their flexibility and performance.

## 💪 How to contribute

Feel free to open an [issue](https://github.com/kauefraga/zetashort/issues). I would love to read and fix the bugs you spotted.

If you want to contribute with your code, follow it:

1. With the repository forked and cloned, start the development mode
2. Develop something cool
3. Open a pull request

```bash
# (1)
pnpm dev
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/zetashort/blob/main/LICENSE) for more information.
