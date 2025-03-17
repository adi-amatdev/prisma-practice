
## Basic init commands
npm install prisma typescript ts-node @types/node --save-dev

npx prisma init

npx tsc --init   //for typescript

## Very IMPORTANT every time schema is changed
1 npx prisma migrate dev --name Initialize the schema
2 npx prisma generate


### when it comes to relations:
prisma requires that you define relations b/w schemas very strictly 
requires 2 lines in the referring schema and one line in the referred schema

