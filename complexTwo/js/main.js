document.querySelector('#btn').addEventListener('click', function (){
  let year = document.querySelector('#search').value
  let country = document.querySelector('#search2').value
fetch(`https://date.nager.at/api/v2/PublicHolidays/${year}/${country}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      something(response)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
});
async function something(response){
  let div = document.querySelector("#responseOne")
  for (var i = 0; i < response.length; i++) {
    console.log((response[i].name));
    // create a p tag
    var para = document.createElement("p")
    // container for para
    var textNode = document.createTextNode(response[i].date + " , ")
    var textNodeTwo = document.createTextNode(response[i].name+ " , ")
    var textNodeFour = document.createTextNode(response[i].launchYear+ " , ")
    var textNodeFive = document.createTextNode(response[i].type+ " , ")

    var text = para.appendChild(textNode)
    var textTwo = para.appendChild(textNodeTwo)
    var textFour = para.appendChild(textNodeFour)
    var textFive = para.appendChild(textNodeFive)

    document.querySelector('#responseOne').appendChild(text);
    document.querySelector('#responseTwo').appendChild(textTwo);
    document.querySelector('#responseFour').appendChild(textFour);
    document.querySelector('#responseFive').appendChild(textFive);
  }
}
