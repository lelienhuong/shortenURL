restart=()=>{
    var x = window.location.href;
    var y = x;
    var z;
    while(y.indexOf("/")!==-1){
       z = y.indexOf("/")
       y = y.replace("/",".");
    }
    z++;
    var t = x.substr(z,x.length)
    if(t.length != 0){
    //  alert(t)
    //   window.location.href = "https://dsc-dut.herokuapp.com/"+t;
    } 
  }

document
    .getElementById('submit-url')
    .addEventListener('click', function () {
        // Gửi url tới backend
        var x = document.getElementById('shorten-output');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            window.location.reload();
        }
        // axios.post("https://dsc-dut.herokuapp.com/url",{
        //     url : document.getElementById('input-url').value
        // })
        // .then(res=>console.log(res.data))
        const yourJsonObject = {
             url : document.getElementById('input-url').value            
        }
        window.fetch("https://dsc-dut.herokuapp.com/url", { 
            method: 'POST', 
            body: JSON.stringify(yourJsonObject), 
          }).then(res => console.log((res.json())))
          .then(document.getElementById('output-url').value = window.location.href +3)
            .catch(err=>console.log(err));
        //   .then(res=>console.log(res.dat)); 

          //        alert("xu" + document.getElementById('input-url').value);
      }

        // document.getElementById('output-url').type = "text"        
        // document.getElementById('output-url').value = document.getElementById('input-url').value
    )
function copy() {
        var copyText = document.getElementById("output-url");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
      }
      
const axios = {
    post: function (url, body) {
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.open("POST", url);
        xmlhttp.send(JSON.stringify(body));
    }
}

// axios.post('https://api-url.dscdut.com', {
//     url: document.getElementById('input-url').value
// })
