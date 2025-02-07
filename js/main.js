
let mode = 'time'

const output = document.getElementById('output')
const alvays = document.getElementById('alvays')
const number = document.getElementById('number')
const time = document.getElementById('time')


setInterval(update, 1000);
update()

//замикання функція в функції)
function bindMode (name) {
   return function(){
      mode = name
      update()
   }
}

function update() {
   output.textContent = format(mode)

}

alvays.onclick = bindMode('alvays')
number.onclick = bindMode('number')
time.onclick = bindMode('time')


//pure function   !!!!!!!!!!!!!!!!!!!
function format(formatMode) {
   const now = new Date()
   switch (formatMode) {
      case 'time':
         return now.toLocaleTimeString()
      case 'number':
         return now.toLocaleDateString()
      case 'alvays':
         return now.toLocaleDateString() + '  ' + now.toLocaleTimeString()
      default: {
         return now.toLocaleTimeString()

      }
   }
}