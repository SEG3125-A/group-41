export async function POST (request, response){
    console.log(request);
    return new Response('John Doe')
}

// export async function POST (request, response){
//     console.log("POST /api/register");
//     return new Response('John Doe')
// }