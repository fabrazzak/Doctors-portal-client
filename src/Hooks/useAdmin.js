import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/admin/${email}`;
     
        if (email) {
            fetch(url, {
                method: "GET",
                headers: { authorization :  `Bearer ${localStorage.getItem("accessToken")}`},
            })
                .then(req => req.json())
                .then(data => {
                    setAdmin(data.admin);
                })

        }

    }, [user])

    return [admin]
}
export default useAdmin;