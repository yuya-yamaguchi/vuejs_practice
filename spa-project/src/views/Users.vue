<template>
  <div>
    <h3>Users</h3>
    <hr>
    <p>User No.{{ id }}</p>
    <router-link :to="'/users/'+id+'/posts?lang=ja&page=1'">ユーザのポスト</router-link> | 
    <router-link :to="{ name: 'users-id-profile', params: {id}, query: { lang: 'ja', page: '2' } }">ユーザのプロフィール</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>