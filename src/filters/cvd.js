export const cvdFilter = (matrix, cvd) => {
  //   console.log('scripting success: ' + matrix);
  //   console.log('cvd = ' + cvd);
  var stylingID;
  var filterID;
  if (document.getElementById('styleID612481')) {
    stylingID = document.getElementById('styleID612481').remove();
    filterID = document.getElementById('filterID471924').remove();
  }
  stylingID = document.createElement('style');
  stylingID.id = 'styleID612481';
  document.body.appendChild(stylingID);

  var filterID = document.createElement('div');
  filterID.id = 'filterID471924';
  filterID.setAttribute(
    'style',
    'height: 0; padding: 0; margin: 0; line-height: 0;'
  );
  document.body.appendChild(filterID);
  filterID.innerHTML = `
              <svg id="colorblind-filters" style="display: none"> 
                  <defs> 
                      <filter id="${cvd}" color-interpolation-filters="linearRGB"> 
                          <feColorMatrix type="matrix" values="${matrix}" in="SourceGraphic" /> 
                      </filter>
                  </defs>
              </svg>
        `;

  console.log(filterID.innerHTML);
  stylingID.innerHTML =
    'html{-webkit-filter:url(#' +
    cvd +
    ');-moz-filter:(#' +
    cvd +
    ');-ms-filter:(#' +
    cvd +
    ');-o-filter:(#' +
    cvd +
    ');filter:(#' +
    cvd +
    ');}';

  console.log(stylingID.innerHTML);
  setTimeout(function () {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
};
