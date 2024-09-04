import { PrismaClient } from "@prisma/client";


export async function POST(request:Request){

    const prisma=  new PrismaClient();


    try {
        const{name, email, password}= await request.json();

        const existingEmail= await prisma.user.findUnique({
            where:{
                email:email,
            },
        })

        if (existingEmail) {

            return Response.json(
                {
                    success:false,
                    message: 'Email already exist'
                },
                {
                    status:400
                }
            )
            
        }

        const createNewUser= await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            }
        })

        
        if (createNewUser) {
            return Response.json(
                {
                    success: true,
                    message: "User Created Succesfully" 
                },
                {
                    status:201
                }
            )
        }

        console.log(createNewUser);
        

        
    } catch (error) {   
        return Response.json(
            {
                success: false,
                message: 'Error Registering User'
            },
            {status:500}
        )
        
    }



}