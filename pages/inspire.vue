<template>
  <v-card class="py-6">
    <v-row v-for="(cols, i) in rows" :key="`row${i}`">
      <v-text-field
        v-for="(col, j) in cols.cols"
        :key="`col${i}-${j}`"
        v-model="col.value"
        class="mx-6"
        :label="col.label"
        outlined
        :color="cols.color"
        clearable
      >
        <v-icon slot="prepend" :color="col.value && cols.color">
          {{ col.icon || cols.icon }}
        </v-icon>
      </v-text-field>
    </v-row>
  </v-card>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data: function () {
    return {
      rows: [
        {
          color: 'red',
          icon: 'mdi-fire',
          cols: [{ label: 'アギ' }, { label: 'マハラギ' }],
        },
        {
          color: 'blue',
          icon: 'mdi-snowflake',
          cols: [
            { label: 'ブフ', value: '' },
            { label: 'マハブフ', value: '' },
          ],
        },
        {
          color: 'green',
          icon: 'mdi-tailwind',
          cols: [
            { label: 'ガル', value: '' },
            { label: 'マハガル', value: '' },
          ],
        },
        {
          color: 'yellow',
          icon: 'mdi-lightning-bolt',
          cols: [
            { label: 'ジオ', value: '' },
            { label: 'マハジオ', value: '' },
          ],
        },
        {
          color: 'orange',
          icon: 'mdi-star-four-points',
          cols: [
            { label: 'コウハ', value: '' },
            { label: 'マハコウハ', value: '' },
          ],
        },
        {
          color: 'purple',
          icon: 'mdi-eye-circle-outline',
          cols: [
            { label: 'エイハ', value: '' },
            { label: 'マハエイハ', value: '' },
          ],
        },
        {
          color: 'orange',
          cols: [
            { label: '斬撃', icon: 'mdi-sword', value: '' },
            { label: '貫通', icon: 'mdi-pistol', value: '' },
            { label: '打撃', icon: 'mdi-karate', value: '' },
          ],
        },
        {
          color: 'teal',
          icon: 'mdi-star-four-points',
          cols: [
            { label: 'ディア', value: '' },
            { label: 'メディア', value: '' },
          ],
        },
        {
          color: 'teal',
          icon: 'mdi-star-four-points',
          cols: [
            { label: 'パトラ', value: '' },
            { label: 'バイスディ', value: '' },
            { label: 'アムリタ', value: '' },
          ],
        },
        {
          color: 'orange',
          icon: 'mdi-skull-outline',
          cols: [
            { label: 'ハマ', value: '' },
            { label: 'マハンマ', value: '' },
          ],
        },
        {
          color: 'purple',
          icon: 'mdi-skull',
          cols: [
            { label: 'ムド', value: '' },
            { label: 'マハムド', value: '' },
          ],
        },
      ],
    }
  },
}
</script>
