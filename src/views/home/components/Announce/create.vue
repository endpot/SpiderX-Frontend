<template>
  <announce :is-edit="false" />
</template>

<script>
import Announce from './details'
export default {
  name: 'CreateAnnounce',
  components: { Announce }
}
</script>
