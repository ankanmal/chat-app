



export async function GET(request:Request){

    return Response.json({
        success: true,
        message: "yay the message from the api"
    },{status:200})
}