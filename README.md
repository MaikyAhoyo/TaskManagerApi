# Task Manager - Backend 

API RESTful construida con [NestJS](https://nestjs.com/), diseñada para servir como el backend principal del task manager. Proporciona una arquitectura escalable, validación de datos estricta y conexión a una base de datos relacional.

## Tecnologías Utilizadas

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **Lenguaje:** TypeScript
* **ORM:** TypeORM
* **Base de Datos:** PostgreSQL
* **Despliegue:** Railway

---

## Requisitos Previos

Antes de levantar el proyecto en tu entorno local, asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (v16 o superior)
* Una base de datos PostgreSQL (local o en la nube como Railway)

---

## Instalación y Configuración Local

1. **Clonar el repositorio:**
   \`\`\`bash
   git clone https://github.com/MaikyAhoyo/TaskManagerApi.git
   cd tu-repo
   \`\`\`

2. **Instalar las dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Variables de Entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto y agrega tu cadena de conexión a PostgreSQL. **Nota:** No incluyas espacios antes ni después del signo `=`.

   \`\`\`env
   DATABASE_URL=postgresql://usuario:password@host:puerto/nombre_bd
   \`\`\`

---

## Ejecución del Servidor

Para iniciar la API en modo desarrollo (con recarga automática al guardar cambios):

\`\`\`bash
npm run start:dev
\`\`\`
El servidor estará corriendo en `http://localhost:3000`.

---

## 🗺️ Endpoints Principales (Recurso: Tasks)

A continuación se describen las rutas disponibles para gestionar las tareas.

| Método | Endpoint | Descripción | Body Requerido (JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/tasks` | Obtiene la lista de todas las tareas | - |
| **GET** | `/tasks/:id` | Obtiene una tarea específica por su ID | - |
| **POST** | `/tasks` | Crea una nueva tarea | `title` (string, min 3 chars), `description` (opcional) |
| **PATCH** | `/tasks/:id` | Actualiza una tarea existente | `title`, `description`, `isCompleted` (boolean) |
| **DELETE** | `/tasks/:id` | Elimina una tarea por su ID | - |

---

## ☁️ Despliegue (Producción)

Este proyecto está configurado para ser desplegado fácilmente en plataformas PaaS como **Railway**. 

**Pasos clave para el despliegue:**
1. Conectar el repositorio de GitHub a Railway.
2. Asegurarse de que el archivo `.env` esté incluido en el `.gitignore`.
3. Configurar la variable de entorno `DATABASE_URL` directamente en el panel de variables del servicio web en Railway, apuntando a la URL interna del servicio de PostgreSQL.

---
