<template>
  <announce :is-edit="true" />
</template>

<script>
import Announce from './details'
export default {
  name: 'EditAnnounce',
  components: { Announce }
}
</script>
