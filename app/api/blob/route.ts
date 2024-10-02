import { glob } from "glob"
export async function GET() {
  try {
    const files = glob.sync("./public/archive/*.png");
    const fileInfo = files.map((file:string) => {
        const name = file.substring(file.lastIndexOf('/')+1);
        const path = name.substring(name.indexOf('/')+1);
        return({
            fileName: name,
            path: path
        })
    })
    return Response.json(fileInfo);
  } catch (error : unknown) {
    console.error(error);
    return Response.error();
  }
}
