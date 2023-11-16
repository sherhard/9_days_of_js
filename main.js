const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','london']
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//   ----------------------------------------------------------------------------------------------------------------

countries.forEach((count_element)=>document.write(count_element.toUpperCase()+' '))
document.write('<br>')
document.write('<br>')
document.write('Используйте forEach для регистрации каждого числа в массиве чисел.')
document.write('<br>')
document.write('<br>')
let sum=0;

numbers.forEach((numForEach)=>sum+=numForEach)
 document.write(sum)

 document.write('<br>')
 document.write('<br>')

 document.write('Используйте map , чтобы создать новый массив, изменив каждую страну в верхнем регистре в массиве стран.')
 document.write('<br>')
 document.write('<br>')

const newCount=countries.map((contMap)=>contMap.toUpperCase())
document.write(newCount)
document.write('<br>')
document.write('<br>')

document.write('Используйте map , чтобы создать массив длины стран из массива стран.<br>')
document.write('<br>')

const countsLeng=countries.map((counLen)=>counLen.length)
console.log(countsLeng)
document.write(countsLeng)
document.write('<br>')
document.write('Используйте карту , чтобы создать новый массив, заменив каждое число квадратом в массиве чисел')

document.write('<br>')
document.write('<br>')

const cubes=numbers.map((cube)=>cube*2)
console.log(cubes)
document.write(cubes)

document.write('<br>')

document.write('Используйте карту , чтобы изменить каждое имя на верхний регистр в массиве имен.')


document.write('<br>')
document.write('<br>')

const firstname=names.map((firName)=>firName.toUpperCase())
console.log(firstname)
document.write(firstname)

document.write('<br>')
document.write('<br>')

const priced=products.map((pric)=>pric.price)
console.log(priced)

document.write('<br>')
document.write('Используйте фильтр , чтобы отфильтровать страны, содержащие land')
document.write('<br>')
document.write('<br>')


const filterCount=countries.filter((filcount)=>filcount.includes('land'))
console.log(filterCount)
document.write(filterCount)
document.write('<br>')
document.write('<br>')
document.write('Используйте filter , чтобы отфильтровать страны, имеющие шесть символов.')
document.write('<br>')

const sixsumbol=countries.filter((sixCounters)=>sixCounters.length===6)
document.write('<br>')

console.log(sixsumbol)
document.write(sixsumbol)

document.write('<br>')
document.write('<br>')
