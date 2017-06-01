;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M754.714127 540.65462c-0.977297-113.176642 92.377635-167.599136 96.794406-170.231079-52.601117-76.964906-134.578466-87.534636-163.871806-88.765673-69.664424-7.046486-135.849464 41.049928-171.213305 41.049928-35.365888 0-89.876573-40.031738-147.697789-38.97057-75.990762 1.062192-145.911023 44.192501-185.053065 112.11445-78.920608 136.864134-20.165075 339.652723 56.674043 450.759217 37.571203 54.337559 82.402038 115.425869 141.284466 113.219621 56.717023-2.25025 78.114209-36.678364 146.6376-36.678364 68.433336 0 87.750055 36.678364 147.651738 35.530215 60.877957-1.102101 99.637267-55.440683 136.868719-109.948111 43.131054-63.049988 60.708081-124.052341 61.896188-127.236869C873.371342 721.115692 755.860277 676.073846 754.714127 540.65462M641.999494 208.216205c31.288869-37.865399 52.34528-90.505293 46.529593-142.891408-45.000711 1.825578-99.467391 29.971615-131.817472 67.837015-28.953589 33.493835-54.297828 87.069031-47.419906 138.434909C559.429627 275.417747 610.79761 245.998717 641.999494 208.216205"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anzhuologo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M247.987001 693.495634c0 60.182684 54.235229 108.978017 109.493763 108.978017l0 108.978017c0 30.066783 25.167193 54.489008 55.258535 54.489008s55.258535-24.422226 55.258535-54.489008l0-107.764376 106.423845 0 0 107.764376c0 30.066783 25.167193 54.489008 55.258535 54.489008 30.088272 0 55.258535-24.422226 55.258535-54.489008L684.938748 802.472628c109.493763 0 109.493763-48.794309 109.493763-108.978017L794.432511 401.526933l-546.44551 0L247.987001 693.495634z"  ></path>' +
    '' +
    '<path d="M893.181559 421.051615c-30.088272 0-54.746882 24.373107-54.746882 54.489008l0 217.955011c0 30.066783 24.658609 54.489008 54.746882 54.489008s54.746882-24.422226 54.746882-54.489008L947.928441 475.540623C947.928441 445.423699 923.269831 421.051615 893.181559 421.051615z"  ></path>' +
    '' +
    '<path d="M130.818441 421.051615c-30.091342 0-54.746882 24.373107-54.746882 54.489008l0 217.955011c0 30.066783 24.65554 54.489008 54.746882 54.489008 30.091342 0 54.746882-24.422226 54.746882-54.489008L185.565323 475.540623C185.565323 445.423699 160.909783 421.051615 130.818441 421.051615z"  ></path>' +
    '' +
    '<path d="M792.641725 333.424882c0-65.288982-34.605146-122.874515-86.371136-155.3563L706.270589 58.060347l-56.352449 0 0 96.650247c-6.640234-1.515516-13.412474-2.673899-20.298302-3.440355-0.373507-7.220449-9.442046-28.196179-29.65746-28.196179L437.597453 123.07406c-20.300348 0-27.402093 21.211091-27.619034 28.314883-5.279237 0.618077-10.487865 1.472538-15.623839 2.533706L394.35458 58.060347 338.002131 58.060347l0 117.779474c-53.780881 32.031531-90.01513 90.775446-90.01513 157.585061l0 11.364839 544.655747 0L792.642748 333.424882zM393.523655 259.799024l-54.6906 0 0-54.6906 54.6906 0L393.523655 259.799024zM704.608739 257.468956l-54.6906 0 0-54.373375 54.6906 0L704.608739 257.468956z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)