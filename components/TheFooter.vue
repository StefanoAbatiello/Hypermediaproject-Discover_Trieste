<template>
  <div class="footer">
    <div class="container row row-cols-2 my-2 p-0 justify-content-between">
      <div class="col-lg-5 col-md-4 col-xs-3 my-3 mx-0">
        <a href="/">
          <img
            :src="require(`~/assets/logo.png`)"
            class="img responsive logo-img"
            alt="Logo"
            href="/"
          />
        </a>
      </div>
      <div class="col-lg-5 col-md-4 col-xs-3 px-0 my-4 comune">
        <a
          href="https://www.comune.trieste.it/"
          target="_blank"
        >
          <img
            :src="require(`~/assets/logo-trieste.png`)"
            class="img trieste"
            alt="comune-logo"
            style="height: 100px"
          />
        </a>
        <p class="col-md-8 col-sm-1 info">Tel. 04 06754850</p>
      </div>
    </div>
    <hr class="divider" />
    <div class="text-box">
      <p class="script">Made by ACSS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  // data() {
  //   return {
  //     footerList: [
  //       {
  //         name: 'About',
  //         path: '/about/',
  //       },
  //       {
  //         name: 'Contacts',
  //         path: '/contacts/',
  //       },
  //       {
  //         name: 'Policy & Privacy',
  //         path: '/policy/',
  //       },
  //     ],
  //   }
  // },
}
</script>

<style scoped>
.footer {
  height: 100px;
  background: royalblue;
  position: absolute;
  bottom: 0px;
}
.logo-img {
  width: 70%;
  height: 5rem;
}
.text-box {
  margin-left: 10%;
  width: 80%;
  text-align: right;
  color: white;
  /* border-top: 0.5px solid grey; */
}
.comune{
  position: absolute;
  right: 20px;
}
.container {
  height: 7rem;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.divider {
  width: 80%;
  color: white;
  margin-left: 50%;
  transform: translate(-50%, 0);
  margin-top: 45px;
  margin-bottom: 0px;
}
@media only screen and (max-width: 770px) {
  .info {
    visibility: hidden;
  }

  .comune {
    width: 200px;
    margin-left: 0px;
  }
}
</style>