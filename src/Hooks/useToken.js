import { useEffect, useState } from "react"

const useToken= user =>{
    const [token,setToken]=useState('');
    useEffect(()=>{
        const email = user?.user?.email
        const currentUser=email;
        const url = `http://localhost:5000/user/${email}`;
        if (user?.user?.email){
            fetch(url, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ currentUser })
            })
                .then(req => req.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                })

        }

    },[user])

    return [token]
}
export default useToken;