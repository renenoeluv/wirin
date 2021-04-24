<template>
    <div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Modal</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center">
      <h3>test de modal</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">OK</b-button>
  </b-modal>
</div>
</template>