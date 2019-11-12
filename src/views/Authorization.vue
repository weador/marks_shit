<!--eslint-disable-->
<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Авторизация"
          text="Пожалуйста, авторизируйтесь!"
        >
          <v-text-field
                  label="Логин"
                  v-model="email"
          ></v-text-field>
          <v-text-field
                  label="Пароль"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn :color="'success'" @click="auth()" >Авторизироваться</v-btn>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    show1: false
  }),
  methods: {
    auth () {
      console.log('auth')
      this.$api.post('api/Auth/SignIn', {
        'email': this.email,
        'password': this.password
      }).then((response) => {
        console.log('res: ', response.data)
        this.$api.defaults.headers.common['Authorization'] = response.data
        this.$router.push('/pharmacies')
      }).catch((e) => {
        console.log('error: ', e)
      })
    }

  }
}
</script>
