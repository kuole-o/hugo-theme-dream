$(document).ready(() => {
  function setClassName() {
    return (
      window.backgroundDark || window.backgroundImageDark
        ? localStore.getItem('hugo-theme-dream-is-dark') === 'y'
        : window.darkNav
    )
      ? 'os-theme-light'
      : 'os-theme-dark'
  }

  window.overlayScrollbarsInstance = $('body')
    .overlayScrollbars({
      className: setClassName(),
      scrollbars: {
        autoHide: 'scroll',
        clickScrolling: true,
      },
    })
    .overlayScrollbars()

  initFilp()
})

function initFilp() {
  $('.dream-flip-toggle').click(() => {
    $('.flip-container').toggleClass('flip-it')
  })
}
