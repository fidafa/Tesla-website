// const openMenu = () =>{
//   document.querySelector(selectors:'.backdrop').className='backdrop active';
//   document.querySelector(selectors:'aside').className='active';
// }




//  const closeMenu = () =>{
//    document.querySelector(selectors:'.backdrop').className='backdrop';
//   document.querySelector(selectors:'aside').className='';
// }



//  document.getElementById(elemendId: 'menuBtn').onclick = e => {
//   e.preventDefault();
//   openMenu();
//  }


// document.querySelector(selectors:'aside button.close').onclick = e => {
//   closeMenu();
// }

// document.querySelector(selectors:'.backdrop').onclick = e => {
//   closeMenu();
// }



const openMenu = () => {
  document.querySelector('.backdrop').classList.add('active');
  document.querySelector('aside').classList.add('active');
}

const closeMenu = () => {
  document.querySelector('.backdrop').classList.remove('active');
  document.querySelector('aside').classList.remove('active');
}

document.getElementById('menuBtn').onclick = e => {
  e.preventDefault();
  openMenu();
}

document.querySelector('aside button.close').onclick = e => {
  closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
  closeMenu();
}
