export const uploadToCloudinary = async (pic) => {
    if(pic){
        const data = new FormData();
        data.append("file",pic);
        data.append("upload_preset","garden");
        data.append("cloud_name","dbszvxbvv");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dbszvxbvv/image/upload",
            {
                method: "post",
                body: data,
            }
        );

        const fileData = await res.json();
        return fileData.url.toString();
    }
}