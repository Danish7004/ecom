import express from 'express';
import cloudinary from 'cloudinary';
import fs from 'fs';

//component import
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';

export const routerImg = express.Router();


//upload image
routerImg.post('/upload', auth, authAdmin, (req, res)=>{
    cloudinary.config({
        cloud_name:	process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
        
    })
    try {
        const removeTemp = (path) =>{
            fs.unlink(path, err=>{
                if(err) throw err;
            })
        };

        const file = req.files.file;
        
        if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({msg:'no files were uploaded'})
        
        if(file.size > 1024*1024){
            removeTemp(file.tempFilePath)
            return res.status(400).json({msg:'file size is too large'})
        }
    
        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTemp(file.tempFilePath)
            return res.status(400).json({msg: 'file formet is incurrect'})
        }
        
        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;
            removeTemp(file.tempFilePath)
            res.json({public_id: result.public_id, url: result.secure_url}) 
        })
        
        // console.log(req.files);
        
    } catch (err) {
     return res.status(500).json({msg: err.message})   
    };

   
});

//destroying image
routerImg.post('/destroy',auth, authAdmin, (req,res)=>{
    cloudinary.config({
        cloud_name:	process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
        
    })
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: "no image selected"})

        cloudinary.v2.uploader.destroy(public_id, async(err, result)=>{
            if(err) throw err;

            res.json({msg: result})
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})  
    }
});

