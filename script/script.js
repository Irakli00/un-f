const toggleBTN = document.querySelector(".toggle-js")
const IPInput = document.querySelector('.IP-input')
const clearBTN = document.querySelector('.clear-js')
const clearIcon = document.querySelector('.clear-img')
const ipForm = document.getElementById("ip-form")
const ipContainer = document.querySelector('.ip-cont-js')
//const IP = '198.103.71.117'
const apiUrl = 'http://ip-api.com/json/'

toggleBTN.addEventListener('click',()=>{
  const getDataAndRender= async function(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const recievedCountryEl =ipForm.querySelector('h2')

    document.getElementById('instruction-text').style.display='none'
  
recievedCountryEl.textContent = data.country

    document.querySelector('.region-js').innerHTML=`
    <div class="recieved-region">
      <img src="./icons/clock.svg" alt=""> <p>${data.timezone}</p>
    </div>
    `
  }
  let IP = IPInput.value
  console.log(IP)
  getDataAndRender(`${apiUrl}${IP}`)
})

//https://ip-api.com/docs/api:json
//Example: http://ip-api.com/json/158.143.37.141
//const recievedData = getData(`http://ip-api.com/json/${test}`)
// 87.9.105.214
// 75.75.128.92
// 226.194.141.150
// 26.210.246.167
// 31.29.53.0
// 12.204.148.1
// 38.40.149.65
// 236.109.69.241
// 9.181.87.195


const clearIpInputArea = function(){
  ipContainer.innerHTML=`
    <img src="./icons/x.svg" alt="">
      <form id="ip-form" action="#">
        <h2>IP Adress</h2>
        <div class="region-js">
          <input class="IP-input" type="text" placeholder="158.143.37.141">
        </div>
      </form>`
}

clearBTN
  .addEventListener('click',()=>{
    clearIpInputArea()
  })
clearIcon.addEventListener('click',()=>{
clearIpInputArea()
})
