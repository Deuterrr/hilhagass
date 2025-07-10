# hilhagass

A simple React + Vite portfolio project, containerized with Docker. I built this not only for a college task, but also to strengthen my personal brand and deepen my experience in website development and engineering.

---

## 🚀 How to run

There are two ways to start the project:

---

### ✅ Using the helper script (recommended)

If you are on **Linux/macOS**, simply run:

```bash
./run.sh
```

Or on **Windows**, double-click:

```
run.bat
```

This will automatically build the Docker image, start the container, and open your browser to [http://localhost:8080](http://localhost:8080).

Stop it anytime with `Ctrl+C` in the terminal, or:

```bash
docker-compose down
```

---

### ✅ Manually via Docker Compose

Alternatively, you can run:

```bash
docker-compose up --build
```

Then open [http://localhost:8080](http://localhost:8080) in your browser manually.

Stop with:

```bash
docker-compose down
```

---

## 📂 Project structure

- `src/` — React components and pages
- `Dockerfile` — builds the app and serves via nginx
- `docker-compose.yml` — orchestrates the build and run
- `.dockerignore` — speeds up Docker build
- `vite.config.js` — Vite build config
- `package.json` — dependencies and build scripts
- `run.sh` / `run.bat` — helper scripts to build and run

---

🎉 **Thank You! - Author**