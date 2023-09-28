
// ---------------------------------------------------------------
// ------------------------- SCROLL PART -------------------------

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("#header").classList.add('headerBG')
    document.querySelector("#header").style.boxShadow = "0 10px 30px rgb(0 0 0 / 5%)";
    document.querySelector('.header__inner').classList.add('hInner')
    document.querySelector('.header__title').classList.add('hTitle')
    let navLinks = document.querySelectorAll(".header__link");
    navLinks.forEach(itm => {
      itm.classList.add('linkScroll-black')
    })
  }
  else {
    document.querySelector("#header").classList.remove('headerBG')
    document.querySelector("#header").style.boxShadow = "0 10px 30px rgb(0 0 0 / 0%)";
    document.querySelector('.header__inner').classList.remove('hInner')
    document.querySelector('.header__title').classList.remove('hTitle')
    let navLinks = document.querySelectorAll(".header__link");
    navLinks.forEach(itm => {
      itm.classList.remove('linkScroll-black')
    })
  }

}

// ---------------------------------------------------------------
// ------------------------- MODALS PART -------------------------

let headMenuBox = document.querySelector('.header__nav');
let headMenuBtn = document.querySelector('.header__menu-btn');
let headMenuRemovIcon = document.querySelector('.bx-menu');

headMenuBtn.addEventListener('click', () => {
  headMenuBox.classList.toggle('headMenuShow');
  headMenuRemovIcon.classList.toggle('bx-x')
})

let heroColBtn = document.querySelector('.hero__colors-btn');
let heroColBox = document.querySelector('.hero__colors-box');

heroColBtn.addEventListener('click', () => {
  heroColBox.classList.toggle('heroCol-show');
})

// ----------------------------------------------------------------------
// ------------------------- CHANGE COLORS PART -------------------------

let colorsBtns = document.querySelectorAll('.hero__colors-item');

function changeColors(id) {
  colorsBtns.forEach((btn, inx) => {
    if (inx + 1 == id) {
      console.log('aa');
      document.body.classList.add(`color${id}`)
    }
    else {
      document.body.classList.remove(`color${inx + 1}`)
    }
  });
} changeColors()


// ----------------------------------------------------------
// ------------------ HERO CURSOR ANIMATION -----------------

let elemets = document.querySelectorAll('.heroAnim-element');
document.body.addEventListener('mousemove', (e) => {
  let x = e.x / 25; let y = e.y / 25;
  elemets.forEach(elem => { elem.style.transform = `translate3d(-${x}px, -${y}px,0px)`; })
})

// ----------------------------------------------------------
// ------------------------ CURSOR  -------------------------

let cursor = document.querySelector(".cursor");
let cursorSpor = document.querySelector(".cursor-spot")

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = cursorSpor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
})

let cursorHoverElements = document.querySelectorAll('.cursorHover')

cursorHoverElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-hover')
    cursorSpor.classList.add('corsor-spot')
  })
  element.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor-hover')
    cursorSpor.classList.remove('corsor-spot')
  })
})

let cursorDefault = document.querySelector('.hero__megic-two')
let cursorSty = document.querySelector('.hero__megic-one')

cursorDefault.addEventListener('click', () => {
  cursor.classList.add('d-none')
  cursorSpor.classList.add('d-none')
})

cursorSty.addEventListener('click', () => {
  cursor.classList.remove('d-none')
  cursorSpor.classList.remove('d-none')
})

// -----------------------------------------------------------------------------
// ------------------ SERVICE ITEMS HOVER EFECT  -------------------------------

// let serviceItems = document.querySelectorAll('.service__item-centent');

// serviceItems.forEach(itm => {
//   itm.addEventListener('mousemove', (e) => {
//     let x = e.clientX / 40;
//     let y = e.clientY / 40;
//     console.log(x, y);
//     itm.style.transform = `rotateX(-${x}deg) rotateY(${y}deg) scale3d(1,1,1)`
//   })
// })


// -----------------------------------------------------------------------------
// ------------------------- PAGNITION PART  -----------------------------------

let categorBtns = document.querySelectorAll('.categorBtns');
let portfolioLIst = document.querySelector('.portfolio__projects-list')
let portfolioItems = document.querySelectorAll('.portfolio__projects-item');

let pagLeftBtn = document.querySelector('#pagLeftBtn');
let pagRightBtn = document.querySelector('#pagRightBtn');
let pagnitionList = document.querySelector('.portfolio__pag-list');

let pagnitionLength = portfolioItems.length / 6
let itemLength = portfolioItems.length / 3
let pagCount = 1
let itemID = 1
let count = 1

// ------------------------------------------------------------------------------------------
//---------------------------------- PARGNITION CLICK LEFT ----------------------------------

pagRightBtn.addEventListener('click', () => {
  if (itemID < portfolioItems.length - itemLength) {
    itemID += itemLength
  }
  pagnitionFunc()
})

// -------------------------------------------------------------------------------------------
//---------------------------------- PARGNITION CLICK RIGHT ----------------------------------

pagLeftBtn.addEventListener('click', () => {
  if (itemID >= itemLength) {
    itemID -= itemLength
  }
  pagnitionFunc()
})

// ----------------------------------------------------------------------------------------
//---------------------------------- PARGNITION FUNCTION ----------------------------------

function pagnitionFunc() {
  count = 0
  portfolioItems.forEach((itm, inx) => {
    if (itemID <= inx + 1 && itemLength > count) {
      count++
      itm.classList.remove('noneItem')
      portfolioLIst.appendChild(itm)
    }
    else {
      itm.classList.add('noneItem')
    }
    if (pagnitionLength >= pagCount) {
      let li = document.createElement('li')
      li.className = 'portfolio__pag-item';
      li.id = pagCount
      li.innerHTML = `<span class="portfolio__pag-span cursorHover" id='${pagCount}'>${pagCount}</span>`;
      pagnitionList.appendChild(li)
      pagCount++
    }
  })

  // ----------------------------------------------------------------------------------------
  //---------------------------------- PARGNITION ACTIVE ----------------------------------

  let pagnitionSpan = document.querySelectorAll('.portfolio__pag-span');

  pagnitionSpan.forEach((span) => {
    if (itemID == span.id * itemLength - itemLength + 1) {
      span.classList.add('pagActive')
    }
    else {
      span.classList.remove('pagActive')
    }
  })
} pagnitionFunc()

// -------------------------------------------------------------------------------------------
//---------------------------------- PARGNITION CLICK ITEMS ----------------------------------

let pagnitionItem = document.querySelectorAll('.portfolio__pag-item');

pagnitionItem.forEach((itm) => {
  itm.addEventListener('click', () => {
    itemID = +itm.id * itemLength - itemLength + 1
    pagnitionFunc()
  })
})

// ---------------------------------------------------------------------------------
//---------------------------------- CATEGOR PART ----------------------------------

categorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    portfolioItems.forEach(itm => {
      if (btn.id == 'All') {
        portfolioLIst.appendChild(itm)
        itm.classList.remove('noneItem')
        itm.classList.add('show')
      }
      else if (btn.id == itm.id) {
        portfolioLIst.appendChild(itm)
        itm.classList.add('show')
        itm.classList.remove('noneItem')
      }
      else {
        itm.classList.add('show')
        itm.classList.add('noneItem')
      }
    })
  })
})