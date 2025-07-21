"use server"
import ImageKit from 'imagekit';



const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    privateKey:process.env.NEXT_PUBLIC_URL_ENDPOINT!,
    urlEndpoint:process.env.PRIVATE_KEY!
}
)
   

export const shareAction = async (formData:FormData)=>{
    const file  = formData.get("file") as File;
    const desc  = formData.get("desc") as string;
    // console.log(file,desc)

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    imagekit.upload({
        file:buffer,
        fileName:file.name,
        folder:"/posts",
        transformation:{
            pre:"w-600",
        },
    },
    function (error,result){
        if(error){
            console.log("error",error)
        }
        else
            console.log(result)
    }

)
    


}