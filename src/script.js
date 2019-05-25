const headerHTML = `
<header class="pv4-ns">
  <h1><a class="f2-ns f1 lh-title normal no-underline dim dark-gray" href="me.html">δyogurt</a></h1>
  <nav class="db-ns dn">
    <a class="no-underline dim f2 lh-copy normal dark-gray mr4" href="illustration.html">illustration</a>
    <a class="no-underline dim f2 lh-copy normal dark-gray mr4" href="animation.html">animation</a>
    <a class="no-underline dim f2 lh-copy normal dark-gray" href="resources.html">resources</a>
  </nav>
  <!--mobile nav menu-->
  <nav class="db dn-l dn-m dn-ns">
    <div class="f2 dim pointer" onclick="open_menu()">menu</div>
    <div id="mobile_menu_links" class="dn">
      <div class="flex flex-column pt4">
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="illustration.html">illustration</a>
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="animation.html">animation</a>
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="resources.html">resources</a>
      </div>
    </div>
  </nav>
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
