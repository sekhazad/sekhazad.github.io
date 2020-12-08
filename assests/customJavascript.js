var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#11998e', '#11998e'],
                ['#DCE35B', '#45B649'],
                ['#1D976C', '#93F9B9']
            ]
        }
    }
});

let forterTag=document.querySelector(`#footer-home strong`);
forterTag.innerHTML=displayYear();

function displayYear(){
    let now =new Date();
    const buildYear=2019;
    let currentYear=now.getFullYear();
    return `Created By SekhAzad <span>&#169;</span> ${buildYear}-${currentYear}`;
}




