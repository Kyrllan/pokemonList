<template>
  <div>
    <b-nav class="barra">
      <b-img
        :src="require('../assets/pokemon-png-logo.png')"
        style="height: 100px"
      >
      </b-img>
      <b-nav-form>
        <b-form-input
          v-model="search"
          @input="busca()"
          placeholder="name"
          aria-label="Input"
          class="mr-1"
          style="margin-top: 10px"
        ></b-form-input>
      </b-nav-form>
    </b-nav>

    <b-container fluid="xl" class="d-flex">
      <b-row>
        <b-col
          cols="12"
          xl="2"
          lg="3"
          md="4"
          sm="6"
          v-for="(item, i) in filtro"
          :key="i"
        >
          <div>
            <Card :nome="item.name" :img="item.sprite" :id="item.id" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./card/card.vue";

export default {
  components: {
    Card,
  },
  data: () => ({
    search: "",
    items: [],
  }),
  computed: {
    filtro() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async getPokemon() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118"
        );
        let data = response.data.results;
        let flag = 10001;
        data.map((el, i) => {
          delete el.url;
          if (i < 898) {
            const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 1
            }.png`;
            el.sprite = sprite;
            el.id = i + 1;
          } else {
            const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${flag}.png`;
            el.sprite = sprite;
            el.id = i + 1;
            flag++;
          }
        });
        this.items = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getPokemon();
  },
};
</script>

<style lang="scss" scoped>
.barra {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #424242;
}
</style>
