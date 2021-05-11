export async function register(data){
    
    try {
       
        console.log(data);
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("nombre", data.name);
        urlencoded.append("email", data.email);
        urlencoded.append("password", data.password);

        let res = await fetch("http://localhost:3000/usuario/",{
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