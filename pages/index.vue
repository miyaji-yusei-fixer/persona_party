<template>
  <v-card>
    <v-row>
      <v-checkbox
        v-model="アギ"
        class="mx-6"
        on-icon="mdi-fire"
        label="アギ"
        off-icon="mdi-fire"
        color="red"
      />
      <v-checkbox
        v-model="マハラギ"
        class="mx-6"
        on-icon="mdi-fire"
        label="マハラギ"
        off-icon="mdi-fire"
        color="red"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ブフ"
        class="mx-6"
        on-icon="mdi-snowflake"
        label="ブフ"
        off-icon="mdi-snowflake"
        color="blue"
      />
      <v-checkbox
        v-model="マハブフ"
        class="mx-6"
        on-icon="mdi-snowflake"
        label="マハブフ"
        off-icon="mdi-snowflake"
        color="blue"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ガル"
        class="mx-6"
        on-icon="mdi-tailwind"
        label="ガル"
        off-icon="mdi-tailwind"
        color="green"
      />
      <v-checkbox
        v-model="マハガル"
        class="mx-6"
        on-icon="mdi-tailwind"
        label="マハガル"
        off-icon="mdi-tailwind"
        color="green"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ジオ"
        class="mx-6"
        on-icon="mdi-lightning-bolt"
        label="ジオ"
        off-icon="mdi-lightning-bolt"
        color="yellow"
      />
      <v-checkbox
        v-model="マハジオ"
        class="mx-6"
        on-icon="mdi-lightning-bolt"
        label="マハジオ"
        off-icon="mdi-lightning-bolt"
        color="yellow"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="コウハ"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="コウハ"
        off-icon="mdi-star-four-points"
        color="orange"
      />
      <v-checkbox
        v-model="マハコウハ"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="マハコウハ"
        off-icon="mdi-star-four-points"
        color="orange"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="エイハ"
        class="mx-6"
        on-icon="mdi-eye-circle-outline"
        label="エイハ"
        off-icon="mdi-eye-circle-outline"
        color="purple"
      />
      <v-checkbox
        v-model="マハエイハ"
        class="mx-6"
        on-icon="mdi-eye-circle-outline"
        label="マハエイハ"
        off-icon="mdi-eye-circle-outline"
        color="purple"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="斬撃"
        class="mx-6"
        on-icon="mdi-sword"
        label="斬撃"
        off-icon="mdi-sword"
        color="orange"
      />
      <v-checkbox
        v-model="貫通"
        class="mx-6"
        on-icon="mdi-pistol"
        label="貫通"
        off-icon="mdi-pistol"
        color="orange"
      />
      <v-checkbox
        v-model="打撃"
        class="mx-6"
        on-icon="mdi-karate"
        label="打撃"
        off-icon="mdi-karate"
        color="orange"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ディア"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="ディア"
        off-icon="mdi-star-four-points"
        color="teal"
      />
      <v-checkbox
        v-model="メディア"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="メディア"
        off-icon="mdi-star-four-points"
        color="teal"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="パトラ"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="パトラ"
        off-icon="mdi-star-four-points"
        color="teal"
      />
      <v-checkbox
        v-model="バイスディ"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="バイスディ"
        off-icon="mdi-star-four-points"
        color="teal"
      />
      <v-checkbox
        v-model="アムリタ"
        class="mx-6"
        on-icon="mdi-star-four-points"
        label="アムリタ"
        off-icon="mdi-star-four-points"
        color="teal"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ハマ"
        class="mx-6"
        on-icon="mdi-skull-outline"
        label="ハマ"
        off-icon="mdi-skull-outline"
        color="orange"
      />
      <v-checkbox
        v-model="マハンマ"
        class="mx-6"
        on-icon="mdi-skull-outline"
        label="マハンマ"
        off-icon="mdi-skull-outline"
        color="orange"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ムド"
        class="mx-6"
        on-icon="mdi-skull"
        label="ムド"
        off-icon="mdi-skull"
        color="purple"
      />
      <v-checkbox
        v-model="マハムド"
        class="mx-6"
        on-icon="mdi-skull"
        label="マハムド"
        off-icon="mdi-skull"
        color="purple"
      />
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      getアギ: 'memo3/アギ',
      getマハラギ: 'memo3/マハラギ',
      getブフ: 'memo3/ブフ',
      getマハブフ: 'memo3/マハブフ',
      getガル: 'memo3/ガル',
      getマハガル: 'memo3/マハガル',
      getジオ: 'memo3/ジオ',
      getマハジオ: 'memo3/マハジオ',
      getコウハ: 'memo3/コウハ',
      getマハコウハ: 'memo3/マハコウハ',
      getエイハ: 'memo3/エイハ',
      getマハエイハ: 'memo3/マハエイハ',
      get斬撃: 'memo3/斬撃',
      get貫通: 'memo3/貫通',
      get打撃: 'memo3/打撃',
      getディア: 'memo3/ディア',
      getメディア: 'memo3/メディア',
      getパトラ: 'memo3/パトラ',
      getバイスディ: 'memo3/バイスディ',
      getアムリタ: 'memo3/アムリタ',
      getハマ: 'memo3/ハマ',
      getマハンマ: 'memo3/マハンマ',
      getムド: 'memo3/ムド',
      getマハムド: 'memo3/マハムド',
    }),
    アギ: {
      get() {
        return this.getアギ
      },
      set(value) {
        this.setアギ(value)
      },
    },
    マハラギ: {
      get() {
        return this.getマハラギ
      },
      set(value) {
        this.setマハラギ(value)
      },
    },
    ブフ: {
      get() {
        return this.getブフ
      },
      set(value) {
        this.setブフ(value)
      },
    },
    マハブフ: {
      get() {
        return this.getマハブフ
      },
      set(value) {
        this.setマハブフ(value)
      },
    },
    ガル: {
      get() {
        return this.getガル
      },
      set(value) {
        this.setガル(value)
      },
    },
    マハガル: {
      get() {
        return this.getマハガル
      },
      set(value) {
        this.setマハガル(value)
      },
    },
    ジオ: {
      get() {
        return this.getジオ
      },
      set(value) {
        this.setジオ(value)
      },
    },
    マハジオ: {
      get() {
        return this.getマハジオ
      },
      set(value) {
        this.setマハジオ(value)
      },
    },
    コウハ: {
      get() {
        return this.getコウハ
      },
      set(value) {
        this.setコウハ(value)
      },
    },
    マハコウハ: {
      get() {
        return this.getマハコウハ
      },
      set(value) {
        this.setマハコウハ(value)
      },
    },
    エイハ: {
      get() {
        return this.getエイハ
      },
      set(value) {
        this.setエイハ(value)
      },
    },
    マハエイハ: {
      get() {
        return this.getマハエイハ
      },
      set(value) {
        this.setマハエイハ(value)
      },
    },
    斬撃: {
      get() {
        return this.get斬撃
      },
      set(value) {
        this.set斬撃(value)
      },
    },
    貫通: {
      get() {
        return this.get貫通
      },
      set(value) {
        this.set貫通(value)
      },
    },
    打撃: {
      get() {
        return this.get打撃
      },
      set(value) {
        this.set打撃(value)
      },
    },
    ディア: {
      get() {
        return this.getディア
      },
      set(value) {
        this.setディア(value)
      },
    },
    メディア: {
      get() {
        return this.getメディア
      },
      set(value) {
        this.setメディア(value)
      },
    },
    パトラ: {
      get() {
        return this.getパトラ
      },
      set(value) {
        this.setパトラ(value)
      },
    },
    バイスディ: {
      get() {
        return this.getバイスディ
      },
      set(value) {
        this.setバイスディ(value)
      },
    },
    アムリタ: {
      get() {
        return this.getアムリタ
      },
      set(value) {
        this.setアムリタ(value)
      },
    },
    ハマ: {
      get() {
        return this.getハマ
      },
      set(value) {
        this.setハマ(value)
      },
    },
    マハンマ: {
      get() {
        return this.getマハンマ
      },
      set(value) {
        this.setマハンマ(value)
      },
    },
    ムド: {
      get() {
        return this.getムド
      },
      set(value) {
        this.setムド(value)
      },
    },
    マハムド: {
      get() {
        return this.getマハムド
      },
      set(value) {
        this.setマハムド(value)
      },
    },
  },
  methods: {
    ...mapActions({
      setアギ: 'memo3/setアギ',
      setマハラギ: 'memo3/setマハラギ',
      setブフ: 'memo3/setブフ',
      setマハブフ: 'memo3/setマハブフ',
      setガル: 'memo3/setガル',
      setマハガル: 'memo3/setマハガル',
      setジオ: 'memo3/setジオ',
      setマハジオ: 'memo3/setマハジオ',
      setコウハ: 'memo3/setコウハ',
      setマハコウハ: 'memo3/setマハコウハ',
      setエイハ: 'memo3/setエイハ',
      setマハエイハ: 'memo3/setマハエイハ',
      set斬撃: 'memo3/set斬撃',
      set貫通: 'memo3/set貫通',
      set打撃: 'memo3/set打撃',
      setディア: 'memo3/setディア',
      setメディア: 'memo3/setメディア',
      setパトラ: 'memo3/setパトラ',
      setバイスディ: 'memo3/setバイスディ',
      setアムリタ: 'memo3/setアムリタ',
      setハマ: 'memo3/setハマ',
      setマハンマ: 'memo3/setマハンマ',
      setムド: 'memo3/setムド',
      setマハムド: 'memo3/setマハムド',
    }),
  },
}
</script>
