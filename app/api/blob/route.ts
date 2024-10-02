import { glob } from "glob"
export async function GET() {
  try {
    const files = glob.sync("./public/archive/*.png");
    const fileInfo = files.map((file:string) => {
        const name_full = file.substring(file.lastIndexOf('\\')+1);
        const name_extract = name_full?.substring(0, name_full.lastIndexOf('.'));
        return({
            fileName: name_extract.substring(name_extract.lastIndexOf('\\')+1),
            path: `${name_full}`
        })
    })
    return Response.json(fileInfo);
  } catch (error : unknown) {
    console.error(error);
    return Response.error();
  }
}
