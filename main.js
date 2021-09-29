let passwordValue = document.querySelector('.text-input');
let correctPassword = 'TrustNo1';
let checks = document.querySelectorAll('.check__item');
let ranges = document.querySelectorAll('.levers__item');
let launchButton = document.querySelector('.launch-button');
let okButton = document.querySelector('.ok-button');
let panel = document.querySelector('.control-panel__inner');
let rocket = document.querySelector('.rocket')

console.log(correctPassword)

okButton.addEventListener('click', () => {

    if(passwordValue.value === correctPassword) {
        checks.forEach(item => {
            item.disabled = false
        });
        ranges.forEach(item => {
            item.disabled = false
        });

    }
})


checkInputs = () => {
    let rangesCounter = 0

    for (let i = 0; i < ranges.length; i++) {
        if(ranges[i].value === ranges[i].max) {
            rangesCounter++
        }
    }
    if ((rangesCounter === ranges.length) &&
    (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length))
    {
        launchButton.disabled = false;
    }
}



panel.onchange = function(){checkInputs()};

function launch()
{

    rocket.animate([,

            {
                transform: 'translate(0,0)'
            },
            {
                transform: 'rotate(30deg)'
            },
            {
                transform: 'translate(100vw,-100vh)'
            }],
        {
            duration: 5000
        });
}

launchButton.addEventListener('click', launch)



















