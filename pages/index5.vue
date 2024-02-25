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
        v-model="サイ"
        class="mx-6"
        on-icon="mdi-circle-double"
        label="サイ"
        off-icon="mdi-circle-double"
        color="pink"
      />
      <v-checkbox
        v-model="マハサイ"
        class="mx-6"
        on-icon="mdi-circle-double"
        label="マハサイ"
        off-icon="mdi-circle-double"
        color="pink"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="フレイ"
        class="mx-6"
        on-icon="mdi-radioactive"
        label="フレイ"
        off-icon="mdi-radioactive"
        color="light-blue"
      />
      <v-checkbox
        v-model="マハフレイ"
        class="mx-6"
        on-icon="mdi-radioactive"
        label="マハフレイ"
        off-icon="mdi-radioactive"
        color="light-blue"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="コウハ"
        class="mx-6"
        on-icon="mdi-star-four-points-circle-outline"
        label="コウハ"
        off-icon="mdi-star-four-points-circle-outline"
        color="orange"
      />
      <v-checkbox
        v-model="マハコウハ"
        class="mx-6"
        on-icon="mdi-star-four-points-circle-outline"
        label="マハコウハ"
        off-icon="mdi-star-four-points-circle-outline"
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
    </v-row>
    <v-row>
      <v-checkbox
        v-model="ディア"
        class="mx-6"
        on-icon="mdi-creation"
        label="ディア"
        off-icon="mdi-creation"
        color="teal"
      />
      <v-checkbox
        v-model="メディア"
        class="mx-6"
        on-icon="mdi-creation"
        label="メディア"
        off-icon="mdi-creation"
        color="teal"
      />
    </v-row>
    <v-row>
      <v-checkbox
        v-model="パトラ"
        class="mx-6"
        on-icon="mdi-creation"
        label="パトラ"
        off-icon="mdi-creation"
        color="teal"
      />
      <v-checkbox
        v-model="バイスディ"
        class="mx-6"
        on-icon="mdi-creation"
        label="バイスディ"
        off-icon="mdi-creation"
        color="teal"
      />
      <v-checkbox
        v-model="エナジー"
        class="mx-6"
        on-icon="mdi-creation"
        label="エナジー"
        off-icon="mdi-creation"
        color="teal"
      />
      <v-checkbox
        v-model="アムリタ"
        class="mx-6"
        on-icon="mdi-creation"
        label="アムリタ"
        off-icon="mdi-creation"
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
      getアギ: 'persona5/アギ',
      getマハラギ: 'persona5/マハラギ',
      getブフ: 'persona5/ブフ',
      getマハブフ: 'persona5/マハブフ',
      getガル: 'persona5/ガル',
      getマハガル: 'persona5/マハガル',
      getジオ: 'persona5/ジオ',
      getマハジオ: 'persona5/マハジオ',
      getサイ: 'persona5/サイ',
      getマハサイ: 'persona5/マハサイ',
      getフレイ: 'persona5/フレイ',
      getマハフレイ: 'persona5/マハフレイ',
      getコウハ: 'persona5/コウハ',
      getマハコウハ: 'persona5/マハコウハ',
      getエイハ: 'persona5/エイハ',
      getマハエイハ: 'persona5/マハエイハ',
      get斬撃: 'persona5/斬撃',
      get貫通: 'persona5/貫通',
      getディア: 'persona5/ディア',
      getメディア: 'persona5/メディア',
      getパトラ: 'persona5/パトラ',
      getバイスディ: 'persona5/バイスディ',
      getエナジー: 'persona5/エナジー',
      getアムリタ: 'persona5/アムリタ',
      getハマ: 'persona5/ハマ',
      getマハンマ: 'persona5/マハンマ',
      getムド: 'persona5/ムド',
      getマハムド: 'persona5/マハムド',
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
    サイ: {
      get() {
        return this.getサイ
      },
      set(value) {
        this.setサイ(value)
      },
    },
    マハサイ: {
      get() {
        return this.getマハサイ
      },
      set(value) {
        this.setマハサイ(value)
      },
    },
    フレイ: {
      get() {
        return this.getフレイ
      },
      set(value) {
        this.setフレイ(value)
      },
    },
    マハフレイ: {
      get() {
        return this.getマハフレイ
      },
      set(value) {
        this.setマハフレイ(value)
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
    エナジー: {
      get() {
        return this.getエナジー
      },
      set(value) {
        this.setエナジー(value)
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
      setアギ: 'persona5/setアギ',
      setマハラギ: 'persona5/setマハラギ',
      setブフ: 'persona5/setブフ',
      setマハブフ: 'persona5/setマハブフ',
      setガル: 'persona5/setガル',
      setマハガル: 'persona5/setマハガル',
      setジオ: 'persona5/setジオ',
      setマハジオ: 'persona5/setマハジオ',
      setサイ: 'persona5/setサイ',
      setマハサイ: 'persona5/setマハサイ',
      setフレイ: 'persona5/setフレイ',
      setマハフレイ: 'persona5/setマハフレイ',
      setコウハ: 'persona5/setコウハ',
      setマハコウハ: 'persona5/setマハコウハ',
      setエイハ: 'persona5/setエイハ',
      setマハエイハ: 'persona5/setマハエイハ',
      set斬撃: 'persona5/set斬撃',
      set貫通: 'persona5/set貫通',
      set打撃: 'persona5/set打撃',
      setディア: 'persona5/setディア',
      setメディア: 'persona5/setメディア',
      setパトラ: 'persona5/setパトラ',
      setバイスディ: 'persona5/setバイスディ',
      setエナジー: 'persona5/setエナジー',
      setアムリタ: 'persona5/setアムリタ',
      setハマ: 'persona5/setハマ',
      setマハンマ: 'persona5/setマハンマ',
      setムド: 'persona5/setムド',
      setマハムド: 'persona5/setマハムド',
    }),
  },
}
</script>
