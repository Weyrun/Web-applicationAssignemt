let togram: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Gram")
let toounce: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Ounces")
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("Info")
let output: HTMLDivElement = <HTMLDivElement> document.getElementById("Output")
let holding: number;
let convert: number = 28.3495231;

togram.addEventListener("click", MouseEvent=>{
    holding = Number(input.value) * convert;
    output.innerHTML = holding.toString() + " g";
})

toounce.addEventListener("click", MouseEvent=>{
    holding = Number(input.value) / convert;
    output.innerHTML = holding.toString() + " oz";
})  