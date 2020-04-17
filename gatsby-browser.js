/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  window.onload = () => {
    function testWebP(callback) {
      var webP = new Image()
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
      webP.onload = webP.onerror = function() {
        callback(webP.height === 2)
      }
    }

    function notify(supported) {
      supported
        ? document.body.classList.add("webp")
        : document.body.classList.add("no-webp")
    }

    function checkVisible(elm, threshold, mode) {
      threshold = threshold || 0
      mode = mode || "visible"

      const rect = elm.getBoundingClientRect()
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      const above = rect.bottom - threshold < 0
      const below = rect.top - viewHeight + threshold >= 0

      return mode === "above"
        ? above
        : mode === "below"
        ? below
        : !above && !below
    }

    const revealQuoteInView = () => {
      const pq = document.getElementsByClassName("pull-quote")[0]

      if (checkVisible(pq, 70)) {
        pq.classList.add("show")
        window.removeEventListener("scroll", revealQuoteInView, false)
      }
    }

    if (document.getElementsByClassName("pull-quote").length > 0) {
      window.addEventListener("scroll", revealQuoteInView, false)
    }

    window.addEventListener(
      "touchstart",
      function onFirstTouch() {
        window.USER_IS_TOUCHING = true
        window.removeEventListener("touchstart", onFirstTouch, false)
        window.removeEventListener("scroll", false)
      },
      false
    )

    testWebP(notify)
  }
}
