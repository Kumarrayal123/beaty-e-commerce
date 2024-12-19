// import jwt from 'jsonwebtoken'

// const authUser = async (req,res,next) => {
//  const {token} = req.headers;

//     if(!token){
//         return res.json({success:false,message:'Not Authorized Login Again'})


//     }
//     try {
//     const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//     req.body.userId = token_decode.id
//     next()

//     } catch (error) {
//         console.log(error)
//         res.json({success :false,message:error.message})
//     }

// }

// export default authUser

import jwt from 'jsonwebtoken';
// import userModel from '../models/userModel.js';

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // const userData = await userModel.findById(token_decode.id);
    req.body.userId = token_decode.id
    next()

    // if (!userData) {
    //   return res.json({ success: false, message: 'User not found' });
    // }

    // req.body.userId = token_decode.id;
    // req.user = userData; // Attach user data to the request object
    // next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
