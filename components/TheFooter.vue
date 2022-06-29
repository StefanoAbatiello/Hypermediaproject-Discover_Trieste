<template>
  <div class="footer">
    <div class="container row row-cols-2 my-4 p-0 justify-content-between">
      <div class="col-lg-5 col-md-6 col-sm-7 px-0">
        <a href="/">
          <img
            :src="require(`~/assets/logo.png`)"
            class="img responsive logo-sito"
            alt="Logo"
          />
        </a>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4 px-0 comune">
        <a href="https://www.comune.trieste.it/" target="_blank">
          <img
            :src="require(`~/assets/logo-trieste.png`)"
            class="img logo-comune"
            alt="comune-logo"
          />
        </a>
        <p class="info">Tel. 04 06754850</p>
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
}
</script>

<style scoped>
.footer {
  height: 100px;
  background: royalblue;
  position: absolute;
  bottom: 0px;
}
.container {
  height: 7rem;
  width: 90%;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.logo-sito {
  width: 70%;
  height: 6rem;
}
.info{
  color: white;
}
.logo-comune {
  height: 6rem;
}
.divider {
  width: 90%;
  color: white;
  margin-left: 50%;
  transform: translate(-50%, 0);
  margin-top: 25px;
  margin-bottom: 10px;
}
.text-box {
  margin-left: 10%;
  width: 80%;
  text-align: right;
  color: white;
  margin-bottom: 10px;
}
/* @media only screen and (max-width: 770px) {
  .info {
    visibility: hidden;
  }

  .comune {
    width: 200px;
    margin-left: 0px;
  }
} */
</style>