const headerHTML = `
<header class="pv4-ns">
  <h1><a class="f2-ns f1 lh-title normal no-underline dark-gray" href="#home">greekδiogurt</a></h1>
  <nav class="db-ns dn">
    <a class="no-underline dim f2 lh-copy normal dark-gray mr4" href="index.html">illustration</a>
    <a class="no-underline dim f2 lh-copy normal dark-gray mr4" href="animation.html">animation</a>
    <a class="no-underline dim f2 lh-copy normal dark-gray mr4" href="me.html">me</a>
    <a class="no-underline dim f2 lh-copy normal dark-gray" href="resources.html">resources</a>
  </nav>
  <!--mobile nav menu-->
  <nav class="db dn-l dn-m dn-ns">
    <div class="f2 dim pointer" onclick="open_menu()">menu</div>
    <div id="mobile_menu_links" class="dn">
      <div class="flex flex-column pt4">
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="index.html">illustration</a>
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="animation.html">animation</a>
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="me.html">me</a>
        <a class="no-underline dim f2 lh-copy normal dark-gray" href="resources.html">resources</a>
      </div>
    </div>
  </nav>
</header>
`;

ko.components.register('header', {
    template: headerHTML
});

ko.applyBindings();

function open_menu() {
  document.
    getElementById("mobile_menu_links").
    classList.
    toggle("dn");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}
