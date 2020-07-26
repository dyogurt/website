const headerHTML = `
<header class="ph2-l" style="font-family:-apple-system, BlinkMacSystemFont,'avenir next', avenir,'helvetica neue', helvetica,ubuntu,roboto, noto,'segoe ui', arial,sans-serif;">
  <h1 class="f3 f2-ns pb2-m pb3-l normal dn db-l">
  <a class="dim no-underline dark-gray" href="info.html">Diogo Matias</a>
  </h1>
  <nav class="f3 f2-ns pv2 mb3-ns normal lh-copy dn db-l">
    <a class="dim no-underline dark-gray mr3 mr4-m mr5-l" href="index.html">Illustration</a>
    <a class="dim no-underline dark-gray mr3 mr4-m mr5-l" href="animation.html">Animation</a>
    <a class="dim no-underline dark-gray mr3 mr4-m mr5-l" href="graphics.html">Graphics</a>
    <a class="dim no-underline dark-gray" href="archive.html">Archive</a>
  </nav>
  <!--mobile nav menu-->
    <div class="f3 f2-m dark-gray dim pointer mt2 pv3 db dn-l" onclick="open_menu()">Menu</div>
    <div id="mobile_menu_links" class="dn">
      <nav class="flex flex-column pt2 f3 normal">
        <a class="f3 f2-m normal no-underline dim f2 lh-copy normal dark-gray" href="index.html">Illustration</a>
        <a class="f3 f2-m normal no-underline dim f2 lh-copy normal dark-gray" href="animation.html">Animation</a>
        <a class="f3 f2-m normal no-underline dim f2 lh-copy normal dark-gray" href="graphics.html">Graphics</a>
        <a class="f3 f2-m normal no-underline dim f2 lh-copy normal dark-gray" href="archive.html">Archive</a>
        <a class="f3 f2-m normal no-underline dim f2 lh-copy normal dark-gray" href="info.html">Info</a>
      </nav>
    </div>
</header>
`;

const footerHTML = `
<footer class="ph5-l ph4-m ph3">
  <div class="w-100 f3-ns f4 measure-wide lh-copy pb4-l pb3-m pb2">
    <p>made with <a href="http://tachyons.io/" class="no-underline normal underline-hover green">Tachyons</a></p>
  </div>
</footer>
`;

ko.components.register('header', {
    template: headerHTML
});

ko.components.register('footer', {
    template: footerHTML
});

ko.applyBindings();

function open_menu() {
  document.
    getElementById("mobile_menu_links").
    classList.
    toggle("dn");
}
