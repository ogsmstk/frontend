<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
    <NuxtLink :to="{ name: 'users' }">User</NuxtLink>
  </nav>
</template>