const functionApi = '';
    
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API")
        count = response.
        document.getElementById("counter").innerText = count;
    })
}
