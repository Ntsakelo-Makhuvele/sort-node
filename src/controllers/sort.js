import { stringConverter } from "../utils/stringConverter.js";

export const sortController = (req,res) => {
    try{ 
          const {data} = req.body;
          if(data){
            const sorted = stringConverter(data);
            res.status(200).json({
                word:sorted
            })
          } 
    }catch(err){

    }
}