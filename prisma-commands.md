
## Basic init commands
npm install prisma typescript ts-node @types/node --save-dev

npx prisma init

npx tsc --init   //for typescript

## Very IMPORTANT every time schema is changed
1 npx prisma migrate dev --name Initialize the schema
2 npx prisma generate
