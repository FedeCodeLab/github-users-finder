# ⚡ GitHub Users Finder

Aplicación desarrollada con **Next.js**, **Zustand** y **Tailwind CSS** que permite buscar usuarios de **GitHub**, visualizar su información detallada y explorar sus repositorios públicos en tiempo real mediante la **API de GitHub**.

🔗 **Demo online:** [https://github-users-finder-sepia.vercel.app/](https://github-users-finder-sepia.vercel.app/)  
💻 **Repositorio:** [https://github.com/FedeCodeLab/github-users-finder](https://github.com/FedeCodeLab/github-users-finder)

---

## 🚀 Características

- 🔍 Búsqueda de usuarios de GitHub en tiempo real
- 👤 Visualización del perfil con avatar, bio, seguidores y ubicación
- 📂 Listado de repositorios públicos del usuario seleccionado
- ⚡ Gestión de estado global con **Zustand**
- 🎨 Estilos responsivos con **Tailwind CSS v4**
- 🌙 UI inspirada en el tema oscuro de GitHub

---

## 🧩 Tecnologías utilizadas

- [Next.js 15.5.5](https://nextjs.org/) - Framework de React
- [React 19.1.0](https://react.dev/) - Librería de UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Zustand](https://github.com/pmndrs/zustand) - Gestión de estado
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework de estilos
- [GitHub REST API](https://docs.github.com/en/rest) - API de datos

---

## 🛠️ Instalación y ejecución local

### 1. Clonar el repositorio
```bash
git clone https://github.com/FedeCodeLab/github-users-finder.git
```

### 2. Entrar al directorio del proyecto
```bash
cd github-users-finder
```

### 3. Instalar dependencias
```bash
npm install
```

> También podés usar `yarn` o `pnpm` según tu gestor preferido.

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 5. Abrir en tu navegador

Abrí [http://localhost:3000](http://localhost:3000) para ver la aplicación.

---

## 🧠 Estructura del proyecto
```
📦 github-users-finder
 ┣ 📂 app
 ┃ ┣ 📜 layout.tsx          # Layout principal
 ┃ ┣ 📜 page.tsx            # Página principal
 ┃ ┗ 📜 globals.css         # Estilos globales
 ┣ 📂 components
 ┃ ┗ 📂 navbar
 ┃   ┗ 📜 index.tsx         # Componente de navegación
 ┣ 📂 store
 ┃ ┗ 📜 useGithubStore.ts   # Store de Zustand
 ┣ 📂 public
 ┃ ┗ 🖼️ assets              # Imágenes y recursos
 ┣ 📜 tailwind.config.js
 ┣ 📜 tsconfig.json
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 🔧 Scripts disponibles
```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea el build de producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

---

## 🌟 Funcionalidades destacadas

### Búsqueda de usuarios
- Búsqueda en tiempo real mientras escribís
- Resultados limitados a 12 usuarios por búsqueda
- Interfaz intuitiva y responsive

### Visualización de perfil
- Avatar del usuario
- Nombre de usuario y nombre real
- Biografía
- Cantidad de seguidores y seguidos
- Información detallada del perfil

### Gestión de estado
- Store global con Zustand para manejar:
  - Lista de usuarios
  - Usuario seleccionado
  - Query de búsqueda

---

## 🧑‍💻 Autor

**Federico Guzmán**  
_Desarrollador Frontend | Next.js • React • TypeScript • Tailwind CSS_

🌐 [Portfolio](https://fedecodelab.vercel.app)  
🐙 [GitHub](https://github.com/FedeCodeLab)  
💼 [LinkedIn](https://www.linkedin.com/in/federico-guzman)

---

## ⭐ Agradecimientos

Si este proyecto te fue útil, considerá darle una estrella ⭐ en GitHub.

---

<div align="center">
  Hecho con ❤️ por <a href="https://github.com/FedeCodeLab">Federico Guzmán</a>
</div>
