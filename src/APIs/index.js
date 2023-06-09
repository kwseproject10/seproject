export const getAPI = async (setValue, router, userID) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${process.env.REACT_APP_SERVER}/${router}?userID=${userID}`, requestOptions)
    .then(response => response.text())
    .then(result => setValue(JSON.parse(result)))
    .catch(error => console.log('error', error));
};

export const getAPILocal = async (setValue, router) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${process.env.REACT_APP_HOST}/${router}`, requestOptions)
    .then(res => console.log(res))
    .catch(error => console.log('error', error));
};