exports.handler = async event => {
let ref=event.headers.referer;
  if (ref=='https://l.facebook.com/' || ref=='https://lm.facebook.com/' || ref=='http://m.facebook.com/' || ref=='lm.facebook.com/' || ref=='http://m.facebook.com') {
    let pathName = event.path.split('/')

    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://presspoint24.com/' + pathName[4] 
      }
    }
  } else {
    let pathName = event.path.split('/')

    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://presspointtt24.netlify.app/posts/'+pathName[4]
      }
    }
  }
}
