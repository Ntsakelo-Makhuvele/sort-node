import { stringConverter } from "../utils/stringConverter.js";

export const sortController = (req,res) => {
    try{ 
          const {data} = req.body;
          if(data){
            const sorted = stringConverter(data);
            res.status(200).json({
                word:sorted
            })
          }else{
            res.status(400).json({
                message:'something went wrong'
            })
          } 
    }catch(err){
        res.status(500).json({
            message: 'there was an internal error'
        })
    } 
}