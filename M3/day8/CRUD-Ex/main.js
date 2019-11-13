const url = `https://strive-school-testing-apis.herokuapp.com/api/product`;
const username = `user25`;
const password = `gX7HF4hYaYyJAzpt`;
saveEvent = async event => {
    const response = await fetch(url, {
      //the POST is made with the fetch method as well
      method: "POST", //declaring the CRUD method
      body: JSON.stringify(event), //Here i'm stringifying the object
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + atob("user25") + ":"+ atob("gX7HF4hYaYyJAzpt"),
        "Access-Control-Allow-Origin": "http://127.0.0.1:5501/M3/day8/CRUD-Ex/back-office.html"
      }),
      "mode": "no-cors"
    });
    return response; //returning the response because the frontend need to check the ok property
  };


handleSubmit = async () => {
    event.preventDefault(); //preventing the default browser event handling
    const myEvent = {
      //gathering the data from the form, field by field
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      brand: document.querySelector("#brand").value,
      price: document.querySelector("#price").value,
      imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
    };
    console.log("myEvent", JSON.stringify(myEvent));
    const response = await saveEvent(myEvent); //saving in the response variable the result of the POST
    if (response.ok) {
      //checking the ok property which stores the successfull result of the operation
      alert("the event was saved successfully");
    } else {
      alert("the event was NOT saved successfully");
    }
};
