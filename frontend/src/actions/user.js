export const login = async (email, password) => {
  console.log(email, password, "Saurabh");

  const res = await fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  return data;
};

export const signup = async(name,email,password,role)=>{
    const res = await fetch("http://localhost:3000/api/user/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,password,role})   
    })
    const data = res.json();
    return data;
}