var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
})

async function main () {
    
    // warning should be implemented by framer
    _calculator.caller();
    _contact.caller();
}

main();

// redirect = () => {
//     // console.log("Funcionando");
//     window.location.href = "../../admin/index.html";
// };