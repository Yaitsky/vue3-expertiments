<script setup>

</script>

<template>
  <div>
    <h1>Hello Grid!</h1>
    <div class="container">
      <div class="item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus magnam debitis, neque
        hic quis tempore, rerum necessitatibus temporibus nostrum odio ab nihil illo molestias maiores deserunt nemo
        labore similique.</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
      <div class="item">Item 5</div>
      <div class="item">Item 6</div>
      <div class="item">Item 7</div>
      <div class="item">Item 8</div>
      <div class="item">Item 9</div>
    </div>

    <div class="layout">
      <header>Header</header>
      <main>Content</main>
      <nav>Navigation</nav>
      <aside>Sidebar</aside>
      <footer>Footer</footer>
    </div>

    <div class="challenge">
      <div class="card purple">Card Purple</div>
      <div class="card">Card 2</div>
      <div class="card">Card 4</div>
      <div class="card black">Card Black</div>
      <div class="card white">Card White</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.item {
  background-color: rgba(lightcoral, 0.25);
  border: 2px solid lightcoral;
  color: lightcoral;
  padding: 32px;
  font-size: 24px;
  font-weight: 400;
}

.layout {
  margin-top: 64px;
  display: grid;
  grid-template-areas:
  'header header header'
  'nav main aside'
  'nav footer footer'
  ;
  grid-template-columns: 220px 1fr 320px;
  grid-template-rows: 100px 400px 140px;
  gap: 16px;
}

header,
main,
nav,
aside,
footer {
  padding: 32px;
  background-color: rgba(lightpink, 0.25);
  border: 2px solid lightpink;
  color: lightpink;
  font-size: 24px;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

nav {
  grid-area: nav;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}

.challenge {
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.card {
  padding: 32px;
  background-color: rgba(lightyellow, 0.25);
  border: 2px solid lightyellow;
  color: lightyellow;
  font-size: 24px;

  &.purple {
    background-color: rgba(plum, 0.25);
    border: 2px solid plum;
    color: plum;
    grid-column: 1 / 3;
  }

  &.white {
    background-color: rgba(whitesmoke, 0.25);
    border: 2px solid whitesmoke;
    color: whitesmoke;
    grid-row: 1 / 3;
    grid-column: 4;
  }

  &.black {
    background-color: rgba(gray, 0.25);
    border: 2px solid gray;
    color: gray;
    grid-column: 2 / 4;
    grid-row: 2;
  }
}
</style>