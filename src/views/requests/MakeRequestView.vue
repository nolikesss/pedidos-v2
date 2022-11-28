<template>
  <Card>
    <!-- template apontando para slot = #content  -->
    <template #content>
      <form class="flex flex-col gap-5" @submit.prevent>
        <div class="flex flex-col gap-1">
          <label>Nome</label>
          <InputText type="text" v-model="request.name" required />
        </div>
        <div class="flex flex-col gap-1">
          <label>Pão</label>
          <Dropdown
            :options="ingredientsStore.breads"
            option-label="type"
            option-value="type"
            v-model="request.bread"
            required
          />
        </div>
        <div class="flex flex-col gap-1">
          <label>Carne</label>
          <Dropdown
            :options="ingredientsStore.meats"
            option-label="type"
            option-value="type"
            v-model="request.meat"
            required
          />
        </div>
        <div class="flex flex-col gap-1">
          <label>Opcional</label>
          <Dropdown
            :options="ingredientsStore.optionals"
            option-label="type"
            option-value="type"
            v-model="request.optional"
            required
          />
        </div>
        <div class="flex flex-row justify-end">
          <Button type="submit" label="Enviar"></Button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from "vue";
import { ingredientsStore } from "@/stores/ingredients";
import { mapStores } from "pinia";

import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

export default defineComponent({
  data() {
    return {
      request: {
        name: "",
        meat: null,
        bread: null,
        optional: null,
      },
    };
  },
  computed: {
    ...mapStores(ingredientsStore),
  },
  components: {
    Card,
    InputText,
    Dropdown,
    Button,
  },
});
</script>
