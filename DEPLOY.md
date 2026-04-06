# Deploy en VPS - DevWolf Portfolio

## Requisitos previos

- Docker y Docker Compose instalados en el VPS
- Traefik configurado con el network `n8n_evoapi`
- Dominio apuntando al VPS

## Pasos para deploy

### 1. Clonar el repositorio
```bash
git clone <repo-url> /opt/devwolf-portfolio
cd /opt/devwolf-portfolio
```

### 2. Crear archivo .env
```bash
cp .env.example .env
nano .env
```

Editar `DOMAIN_NAME` con tu dominio:
```
DOMAIN_NAME=devwolf.com.ar
```

### 3. Construir y levantar
```bash
docker compose up -d --build
```

### 4. Verificar
```bash
docker compose logs -f
```

## Comandos útiles

```bash
# Ver estado
docker compose ps

# Reiniciar
docker compose restart

# Detener
docker compose down

# Reconstruir
docker compose up -d --build --force-recreate

# Ver logs
docker compose logs -f devwolf-frontend
```

## Actualizar desde repo

```bash
cd /opt/devwolf-portfolio
git pull
docker compose up -d --build
```

## Estructura de archivos

```
.
├── Dockerfile           # Imagen Docker
├── docker-compose.yml   # Orquestación con Traefik
├── .dockerignore        # Archivos excluidos del build
├── .env.example         # Variables de entorno ejemplo
├── next.config.js       # Configuración Next.js (standalone)
└── src/                 # Código fuente
```

## SSL/TLS

El proyecto usa Traefik con Let's Encrypt para SSL automático.
Asegurate de que el dominio ya esté apuntando al VPS antes de levantar el contenedor.