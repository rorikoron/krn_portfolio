import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const glob = require('glob');
    const files = glob.sync("./public/archive/*.png");
    const fileInfo = files.map((file:string) => {
        const name_full = file.split("\\").pop();
        const name_extract = name_full?.substring(0, name_full.lastIndexOf('.'));
        return({
            fileName: name_extract,
            path: `/archive/${name_full}`
        })
    })
    return Response.json(fileInfo);
  } catch (error : any) {
    return Response.error();
  }
}
