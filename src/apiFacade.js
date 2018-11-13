const URL = "ADD URL TO YOU SERVER"; //TODO Add URL

function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}
setToken = (token) => {
  localStorage.setItem('jwtToken', token)
}
getToken = () => {
  return localStorage.getItem('jwtToken')
}
loggedIn = () => {
  const loggedIn = this.getToken() != null;
  return loggedIn;
}
logout = () => {
  localStorage.removeItem("jwtToken");
}

class ApiFacade {
 makeOptions(method,addToken,body) {
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && this.loggedIn()) {
     headers["x-access-token"] = this.getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
 }
}
const facade = new ApiFacade();
export default facade;