<template>
  <div class="w-full mx-auto flex items-start gap-5 @xl:flex-row flex-col px-4">
    <USkeleton class="@xl:w-64 w-full h-64 rounded-lg" />
    <div class="flex flex-col flex-grow gap-2">
      <USkeleton class="w-full h-3 rounded-lg" />
      <USkeleton class="w-[80%] h-20 rounded-lg" />
    </div>
  </div>
</template>
