<template>
  <div class="grid @md:grid-cols-2 @xl:grid-cols-3 gap-4 w-full">
    <USkeleton v-for="i in 6" :key="i" class="h-64 rounded-lg" />
  </div>
</template>
