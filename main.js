const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

function onClick(param) {
  param === "one" ? location.href = "#two" : location.href = "#one"
}

function onClick2(param) {
  param === "two" ? location.href = "#three" : location.href = "#two"
}

function onClick3(param) {
  param === "three" ? location.href = "#one" : location.href = "#three"
}