<template>
  <div class="cartao">
    <b-img :src="img" rounded="circle" class="imagem"></b-img>
    <div class="corpo">
      <div style="margin-top: 50px">
        <p class="texto">#{{ id }} {{ nome }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    nome: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
.cartao {
  width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imagem {
  width: 100px;
  height: 100px;
  z-index: 10;
  margin-top: 10px;
}
.corpo {
  position: absolute;
  border-bottom: 90px solid #424242;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  margin-top: 60px;
  width: 200px;
}
.texto {
  text-transform: capitalize;
  color: white;
  font-size: 0.8em;
  line-height: 1.1;
}
/* .corpo {
  position: absolute;
  width: 185px;
  height: 100px;
  border: 1px solid white;
  margin-top: 60px;
  border-radius: 10px;
  background-color: #424242;
} */
</style>
