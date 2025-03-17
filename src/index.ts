import { PrismaClient } from "@prisma/client";
const prismaCLient = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const result = await prismaCLient.user.create({
        data:{
            email:username,
            password:password,
            firstName:firstName,
            lastName:lastName
        }
    });
    console.log(result)
}

// insertUser("adi","12345","adi","pose");


interface UpdateParams{
    firstName: string,
    lastName: string
}

async function updateUser(username: string,{firstName,lastName}:UpdateParams) {
    const result = await prismaCLient.user.update({
        where:{
            email: username
        },
        data:{
            firstName:firstName,
            lastName:lastName,
        }
    })
    console.log(result);
}

// updateUser("adi",{
//     firstName:"myname issssss",
//     lastName:"lastnameeeeee"
// });

interface deleteParams{
    username: string
}

async function deleteUser({username}:deleteParams) {
    const result = await prismaCLient.user.delete({
        where:{
            email:username
        }
    });
    console.log(result);
};

deleteUser({username:"adi"});