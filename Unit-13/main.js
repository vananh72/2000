// Exercise 1:
const sum = () => {
    number1 = Number(document.getElementById('number1').value)
    number2 = Number(document.getElementById('number2').value)
    return alert (number1 + number2)
}

// Exercise 2:
const changeColor = ev => {
    const evColor = ev.target
    const color = evColor.style.backgroundColor
    return color === 'red' ? evColor.style.backgroundColor = 'green' : evColor.style.backgroundColor = 'red' 
}

// Exercise 3:
const showElectric = () => {
  const type = document.getElementById('electrics').value
  switch(type) {
    case 'Laptop' :
      document.getElementById('listElectric').innerHTML = 
      <ul>
        <li>Macbook</li>
        <li>Dell</li>
        <li>Lenovo</li>
        <li>Asus</li>
      </ul>
      break
    case 'Phone' :
      document.getElementById('listElectric').innerHTML =
      <ul>
        <li>Apple</li>
        <li>Samsung</li>
        <li>Nokia</li>
      </ul>
      break
    case 'TV' :
      document.getElementById('listElectric').innerHTML =
      <ul>
        <li>LG</li>
        <li>Sony</li>
      </ul>
      break
    default :
    document.getElementById('listElectric').innerHTML = ''
  }
}

// Exercise 4 :
const menu = [
  {
      name: 'Home',
      children: [
          {
              name: 'Home 1',
              children: [
                  {
                      name: 'Home 1.1',
                      children: [
                          { name: 'Home 1.1.1' }
                      ]
                  },
                  {
                      name: 'Home 1.2',
                      children: [
                          { name: 'Home 1.2.1' }
                      ]
                  }
              ]
          },
          {
              name: 'Home 2',
              children: [
                  {
                      name: 'Home 2.1'
                  }
              ]
          },
          {
              name: 'Home 3',
              children: [
                  {
                      name: 'Home 3.1'
                  }
              ]
          }
      ]
  },
  {
      name: 'About',
      children: [
          {
              name: 'About 1',
              children: [
                  {
                      name: 'About 1.1',
                      children: [
                          { name: 'About 1.1.1' }
                      ]
                  },
                  {
                      name: 'About 1.2',
                      children: [
                          {
                              name: 'About 1.2.1',
                              children: [
                                  { name: 'About 1.2.1.1' },
                                  { name: 'About 1.2.1.2' },
                                  { name: 'About 1.2.1.3' }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              name: 'Home 2',
              children: [
                  {
                      name: 'Home 2.1'
                  }
              ]
          }
      ]
  }
]
function showMenu (menu = []) {
  menu.forEach(item => {
    console.log(item.name)
    if (item.children) {
      showMenu(item.children)
    }
  })
}
