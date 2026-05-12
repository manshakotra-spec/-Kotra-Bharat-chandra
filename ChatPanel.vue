<template>
  <div class="ai-chat-panel">
    <h2>AI Assistant</h2>

    <textarea v-model="message"></textarea>

    <button @click="sendMessage">
      Send
    </button>

    <div class="response">
      {{ response }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { askGemini } from './GeminiService';

const message = ref('');
const response = ref('');

async function sendMessage() {
  response.value = 'Thinking...';

  const result = await askGemini(message.value);

  response.value = result;
}
</script>

<style>
.ai-chat-panel {
  padding: 20px;
}

textarea {
  width: 100%;
  height: 120px;
}
</style>
