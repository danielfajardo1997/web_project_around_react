# Around The U.S. — React

Migración a React (Vite + TypeScript) del proyecto "Around the U.S." del programa de desarrollo web de TripleTen.

## Tecnologías

- React 19
- TypeScript
- Vite

## Estructura del proyecto

```
src/
├── components/
│   ├── App.tsx
│   ├── Header/
│   ├── Main/
│   │   ├── Main.tsx
│   │   ├── Card/
│   │   └── Popup/
│   │       ├── Popup.tsx
│   │       ├── NewCard/
│   │       ├── EditProfile/
│   │       ├── EditAvatar/
│   │       └── ImagePopup/
│   └── Footer/
├── types/
│   └── types.ts
├── blocks/
├── images/
└── vendor/
```

## Cómo ejecutar

```
npm install
npm run dev
```

El proyecto se sirve en `http://localhost:3000`.

## Scripts

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — compila TypeScript y genera el build de producción.
- `npm run lint` — corre el linter (oxlint).
- `npm run preview` — sirve el build de producción localmente.
