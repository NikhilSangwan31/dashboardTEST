export const Login = async (username, password) => {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
  .then((response) => {
    const  data  = response.json();
    // console.log("data",data);
    resolve(data);
  })
  .catch((error) => {
    reject(error);
  });
    });
};
