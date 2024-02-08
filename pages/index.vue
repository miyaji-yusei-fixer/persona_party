<template>
  <v-row>
    <v-col>
      <v-textarea v-model="memo1" label="ページが変わると消える" outlined />
      <v-textarea v-model="memo2" label="リロードすると消える" outlined />
      <v-textarea v-model="memo3" label="タブが変わると消える" outlined />
      <v-textarea v-model="memo4" label="タブが変わっても消えない" outlined />
      <v-btn @click="chachClear">キャッシュ削除</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data: function () {
    return {
      memo1: '',
    }
  },
  computed: {
    ...mapGetters({
      getMemo2: 'memo2/memo',
      getMemo3: 'memo3/memo',
      getMemo4: 'memo4/memo'
    }),
    memo2: {
      get() {
        return this.getMemo2
      },
      set(value) {
        this.setMemo2(value)
      },
    },
    memo3: {
      get() {
        return this.getMemo3
      },
      set(value) {
        this.setMemo3(value)
      },
    },
    memo4: {
      get() {
        return this.getMemo4
      },
      set(value) {
        this.setMemo4(value)
      },
    },
  },
  methods: {
    ...mapActions({
      setMemo2: 'memo2/setMemo',
      setMemo3: 'memo3/setMemo',
      setMemo4: 'memo4/setMemo',
    }),
  chachClear () {
    this.memo1 = ''
    this.memo2 = ''
    this.memo3 = ''
    this.memo4 = ''
    window.sessionStorage.removeItem('memo3')
    window.localStorage.removeItem('memo4')
  }
  },
}
</script>
