window.onload = function(e) {
  function onTabClick(event) {
    event.stopPropagation()
    event.preventDefault()
    var activeTab = document.querySelectorAll('.tab--active')
    var activeTabContent = document.querySelectorAll('.tab-content--active')

    // deactivate existing active tab and panel
    for (var i=0; i < activeTab.length; i++){
      activeTab[i].className = activeTab[i].className.replace(' tab--active', '');
    }

    for (var i=0; i < activeTabContent.length; i++){
      activeTabContent[i].className = activeTabContent[i].className.replace(' tab-content--active', '');
    }

    console.log(event.target)
    // activate new tab and panel
    event.target.className += ' tab--active';
    console.log(document.getElementById(event.target.href.split('#')[1]))
    document.getElementById(event.target.href.split('#')[1]).className += ' tab-content--active';
  }

  const el = document.getElementsByClassName('tab-list')


  for (let i=0; i < el.length; i++) {
    console.log(el[i])
    el[i].addEventListener('click', onTabClick, false)
  }
}
