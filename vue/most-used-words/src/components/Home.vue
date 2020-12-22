<template>
  <v-container fluid>
      <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
      </div>
  </v-container>
</template>

<script>
import Pill from './Pill'

export default {
    components: { Pill },
    data: function() {
        return {
            groupedWords: [
                {name: 'you', amount: 122},
                {name: 'increase', amount: 14},
                {name: 'he', amount: 50},
            ]
        }
    }
}
</script>


<style>
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>