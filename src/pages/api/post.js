export default function postAPI(req, res) {
  const ref= req.headers.referer;
 const url = require('url');
 const queryObject = url.parse(req.url, true).query;
  

 if( ref=="https://l.facebook.com/" || ref=='https://lm.facebook.com/' || ref=='http://m.facebook.com/' || ref=='lm.facebook.com/' || ref=='http://m.facebook.com')
     {
      res.redirect('https://presspoint24.com/' + JSON.stringify(queryObject.id).substring(1));
        //res.send(JSON.stringify(queryObject.posts));
       //res.status(200).json({name : queryObject});
     }
  else
    res.redirect('https://life4animals.vercel.app/posts/' + JSON.stringify(queryObject.id).substring(1, queryObject.id.length));
    
}
