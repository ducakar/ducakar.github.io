// © 2015 Davorin Učakar

var piw = {
  table: null,
  data: null,

  init: function (tiles, titles) {
    // Generate tiles.
    var nRows = Math.floor((tiles.length + 2) / 3)

    this.data  = tiles
    this.table = document.getElementById('piwTiles')

    for (var i = 0; i < nRows; ++i) {
      var tr = document.createElement('tr')
      var td = document.createElement('th')

      td.colSpan = 3
      td.innerHTML = titles[i]

      tr.appendChild(td)
      this.table.appendChild(tr)

      tr = document.createElement('tr')

      for (var j = 0; j < 3; ++j) {
        var index = i * 3 + j
        var td    = document.createElement('td')

        if (index < tiles.length) {
          var a   = document.createElement('a')
          var img = document.createElement('img')

          a.href  = 'javascript:piw.show(' + index + ')'
          img.src = tiles[index].thumb

          a.appendChild(img)
          td.appendChild(a)
        }

        tr.appendChild(td)
      }

      this.table.appendChild(tr)
    }

    // Generate popup window.
    this.popupImage  = document.createElement('img')
    this.popupFrame  = document.createElement('iframe')
    this.popupDiv    = document.createElement('div')
    this.popupText   = document.createElement('div')
    this.popupBox    = document.createElement('div')
    this.popupWindow = document.createElement('div')

    this.popupImage.onload     = function () {
      piw.align(this, this.width, this.height)
    }
    this.popupBox.className    = 'piwBox'
    this.popupBox.onclick      = function (e) {
      e.stopPropagation()
    }
    this.popupWindow.className = 'piwPopup'
    this.popupWindow.onclick   = function () {
      piw.popupWindow.style.display = 'none'
      piw.popupImage.src            = ''
      piw.popupFrame.src            = ''
    }

    this.popupBox.appendChild(this.popupText)
    this.popupDiv.appendChild(this.popupImage)
    this.popupDiv.appendChild(this.popupFrame)
    this.popupWindow.appendChild(this.popupDiv)
    this.popupWindow.appendChild(this.popupBox)

    document.body.appendChild(this.popupWindow)

    window.onscroll = function () {
      piw.popupWindow.style.top = window.scrollY + 'px'
    }
  },

  show: function (index) {
    var elem = this.data[index]

    this.popupImage.style.display  =  'none'
    this.popupFrame.style.display  =  'none'
    this.popupBox.style.top        = (window.innerHeight - 120) + 'px'
    this.popupText.innerHTML       = elem.text
    this.popupWindow.style.display = 'block'

    if (elem.image.match(/html$/)) {
      this.popupFrame.src = elem.image
      this.align(this.popupFrame, 1280, 720)
    }
    else {
      this.popupImage.src = elem.image
    }
  },

  align: function (element, desiredWidth, desiredHeight) {
    var maxHeight = window.innerHeight - 140
    var width     = Math.floor(desiredWidth * maxHeight / desiredHeight)
    var height    = maxHeight
    var left      = Math.floor((window.innerWidth - width) / 2)
    var top       = 10

    if (width > window.innerWidth) {
      width  = window.innerWidth
      height = Math.floor(desiredHeight * window.innerWidth / desiredWidth)
      left   = 0
      top    = Math.floor(maxHeight * window.innerWidth / desiredWidth / 2)
    }

    this.popupDiv.style.width   = width + 'px'
    this.popupDiv.style.height  = height + 'px'
    this.popupDiv.style.left    = left + 'px'
    this.popupDiv.style.top     = top + 'px'

    element.style.width         = width + 'px'
    element.style.height        = height + 'px'
    element.style.display       = 'block'
  }
}
