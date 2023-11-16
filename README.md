# pern-ts-vite-boilerplate
A project boilerplate for Postgres, Express, React, Node, Typescript, Vite. This project boilerplate uses Docker.

## Build with Docker
Assuming you already have docker installed.  

On the projects root folder, execute the following commands:  
`docker compose build`  
`docker compose up`

## Build for Production

The default Docker build of this project boilerplate is for `development`. If you want to build it for production, you will have to change some configurations in the Dockerfiles.

Just change the `Development` instances to `Production` and then change the appropriate commands:  

client/Dockerfile  
`CMD ["sh", "-c", "npm run dev"]` to `CMD ["sh", "-c", "npm run build"]`

server/Dockerfile  
`CMD ["sh", "-c", "npm run dev"]` to `CMD ["sh", "-c", "npm run start"]`
