// var buttonSelected = false;
// var filterStateID = [
//   'Normal',
//   'Deuteranopia (green-blind)',
//   'Protanopia (red-blind)',
//   'Tritanopia (blue-blind)',
// ];

// var eventSelected = '';

// function openForm() {
//   document.getElementById('popup').style.display = 'block';
// }

// function closeForm() {
//   document.getElementById('popup').style.display = 'none';
// }

// function listenFilterOptions() {
//   for (let i = 0; i < filterStateID.length; i++) {
//     document.getElementById(filterStateID.at(i)).onchange = function () {
//       if (!buttonSelected) {
//         eventSelected = filterStateID.at(i);
//         disableOptions();
//         buttonSelected = true;
//       } else if (buttonSelected && filterStateID.at(i) == eventSelected) {
//         enableOptions();
//         buttonSelected = false;
//         eventSelected = '';
//       }
//       console.log(buttonSelected);
//     };
//   }
// }

// function disableOptions() {
//   for (let i = 0; i < filterStateID.length; i++) {
//     if (filterStateID.at(i) != eventSelected) {
//       document.getElementById(filterStateID.at(i)).disabled = true;
//     }
//   }
// }

// function enableOptions() {
//   eventSelected = '';
//   for (let i = 0; i < filterStateID.length; i++) {
//     document.getElementById(filterStateID.at(i)).disabled = false;
//   }
// }

// document.getElementById('open-button').addEventListener('click', openForm);
// document.getElementById('close-button').addEventListener('click', closeForm);
// document
//   .getElementById('ColorBlindSelection')
//   .addEventListener('click', listenFilterOptions);
