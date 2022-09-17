#### App where i learnt Nestjs features , architechture and authentication.

Stack used

- Prisma - for Postgres
- Docker - to host and run postgres
- nestjs - backend framework
- python - api testing
- Typescript
- PassportJs - Auth and jwt management

### Docs how i used prisma and docker in first place

- I used Compose Docs for generating the documentation ; they are static html/js files so i was thinking to make a site and serve it via express where i will serve all the documentations of my Apps
- Prisma well i used to maintain all my db works and i guess i am in love with it 🥰 , Prisma ORM is flexible for me to setup relations easily and manage creating via `npx prisma migrate dev` and moniter my database from `npx prisma studio`
- Postgres was awesome to work with rn as i was currently using Prisma it doesnt make sense for me as it is `Mysql` or `Postgres` but maybe i will get to know with features like geotaging
- Docker i am using to run my postgres instance on port `5434` this is my first time tho
- Running Redis instance on docker for OTP support

##Dependencies and Architecture 
![Image](https://raw.githubusercontent.com/jayendramadaram/NestProjects/main/crudapp/documentation/graph/dependencies.svg)

![Image](https://raw.githubusercontent.com/jayendramadaram/NestProjects/main/crudapp/documentation/modules/AppModule/dependencies.svg)
