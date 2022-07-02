<template>
  <div class="footer">
    <div class="container row row-cols-2 my-4 p-0 justify-content-between">
      <div class="col-lg-5 col-md-6 col-sm-7 px-0">
        <a href="/">
          <img
            :src="require(`~/assets/page-logo.png`)"
            class="img responsive logo-sito"
            alt="logo to home"
          />
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 px-0 comune">
        <a href="https://www.comune.trieste.it/" target="_blank">
          <img
            :src="require(`~/assets/logo-trieste.png`)"
            class="img logo-comune"
            alt="logo to comune"
          />
        </a>
      </div>
    </div>
    <hr class="divider" />
    <div class="text-box">
      <h4 class="script">Made by ACSS</h4>
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
  height: 100px;
  width: 300px;
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
  color: white;
  margin-bottom: 10px;
}
</style>