
export const swDev = () => {
    console.log(process.env.REACT_APP_PUBLIC_URL)
    let swurl = `${process.env.REACT_APP_PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swurl).then((response) => {
        console.log("response", response);
    }).catch((e) => {
        console.log(e);
    });
}