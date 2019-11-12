<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg12
      >
        <material-card
          color="info"
          type="Line"
        >
          <h1>Аптеки</h1>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    // pharmaciesList () {
    //   return this.$store.state('pharmaciesList')
    // },
    ...mapState({
      pharmaciesList: state => state.pharmaciesList
    })
  },
  mounted () {
    // this.$store.dispatch('loadPharmaciesList')
    console.log('loading')
    this.$api.get('/api/Stupid/GetPharmacies').then((response) => {
      console.log('data: ', response.data)
    }).catch((e) => {
      console.log('ошибка загрузики списка аптек: ', e)
    })
  },
  methods: {
  }
}
</script>
