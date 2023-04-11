const api_key = "5843e52ad6331653683e7026";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;



const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');
const list_one = document.getElementById('list_one');
const list_two = document.getElementById('list_two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');


fetch(url + "/codes")
.then(data => data.json())
.then(user => {
    console.log(user)
    const data = user.supported_codes;
    let optionsStr;
    for (options of data) {
    optionsStr += `<option value="${options[0]}">${options[1]}</option>`;

    }


    list_one.innerHTML = optionsStr;
    list_two.innerHTML = optionsStr;

});



calculate.addEventListener('click',() => {
    const doviz1 = currency_one.value;
    const doviz2 = currency_two.value;
    const miktar = amount.value;
    
    fetch(url + "/latest/" + doviz1)
    .then(response => response.json())
    .then(data => {
        const sonuç = (data.conversion_rates[doviz2] * miktar).toFixed(3);
        result.innerHTML = `
        <div class="card border-primary">
            <div class="card-body text-center" style="font-size:30px;">
                ${miktar} ${doviz1} = ${sonuç} ${doviz2}
            </div>
        </div>
        
        
        `
    })

})


