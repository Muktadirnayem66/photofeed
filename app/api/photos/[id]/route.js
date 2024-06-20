import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";



export async function GET(_request, {params}){
    const photoId = params?.id
    const getPhotoId = getPhotoById(photoId)
    
    return NextResponse.json(getPhotoId)
}