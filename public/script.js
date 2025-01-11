document.getElementById("fitness-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const activity = document.getElementById("activity").value;

    const response = await fetch("http://localhost:3000/api/fitness" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                weight: weight,
                height: height,
                activity: activity
            })
     });
     const data = await response.json();
     document.getElementById("results").innerHTML = `
            <h3> AI Recommendations : </h3>
            <p> ${data.message} </p>
        `;
})