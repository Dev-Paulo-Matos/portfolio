var menu = document.querySelector('.checkbox-menu');
var menuNav = document.querySelector('.menu');
var listLinks = document.querySelector('.list-links').querySelectorAll('a');

console.log(menu)
console.log(menuNav)
menu.addEventListener('click', () => {
    
    
    toggle(menuNav)
})
console.log(listLinks)
for (links of listLinks) {
    links.addEventListener('click', () => {
        
        toggle(menuNav)
    })
}

function toggle(item) {
   
        var atribute = item.getAttribute('data-menu')
        if (atribute == 'false') {
            item.setAttribute('data-menu', true)
        } else {
            item.setAttribute('data-menu', false)
        }
        console.log(item.getAttribute('data-menu'))

}