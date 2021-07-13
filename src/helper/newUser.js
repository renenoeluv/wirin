export async function register(data){
    
    try {
       
        console.log(data);
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("nombre", data.name);
        urlencoded.append("email", data.email);
        urlencoded.append("password", data.password);

        let res = await fetch(process.env.VUE_APP_REGISTER,{
            method: 'POST',
            headers: {
                        //'Content-Type': 'application/json'
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      
            body:urlencoded
            
        });
        var resMdd = await res.json();
        console.log(resMdd)
        return resMdd;
    } catch {
        console.log("hubo un error");
        console.log(resMdd)
        
        return resMdd;
    }
}
export async function verify(data){
 try{
   let res = await fetch(process.env.VUE_APP_VERIFY,{
     method:'GET',
     headers:{
       token: data
     }
   });
   res= await res.json()
   console.log(res)
   return res
 }catch(err){
    console.log(err);
    console.log("hubo un error")
    return err
 }
}
export async function send_mail(data){
  let url= data.url
  data = await JSON.stringify(data)
  console.log(url)
  console.log(data)
  try{
    let res = await fetch(url,{
      method:'POST',
      headers:{
        "Content-Type": "application/json"

      },
      body:data
    });

    res =  await res.json()
    console.log(res)
    return res
  }catch(err){
    console.log("hubo un error")
    console.log(err)
    return err
  }
}