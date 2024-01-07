<template>
  <div class="ml-16 mt-8">
    <div class="grid grid-cols-4 grid-rows-6 w-64 h-80 gap-1">
      <div class="text-clip overflow-hidden p-2 pr-4 text-right bg-gray-900 text-blue-300 col-span-4 tracking-wider">
        {{ input }}
      </div>
      <custom-button @click="allClear()">
        AC
      </custom-button>
      <custom-button @click="clearLast()">
        C
      </custom-button>
      <custom-button @click="addText('%')">
        %
      </custom-button>
      <custom-button @click="addText('/')">
        /
      </custom-button>
      <custom-button @click="addText('7')">
        7
      </custom-button>
      <custom-button @click="addText('8')">
        8
      </custom-button>
      <custom-button @click="addText('9')">
        9
      </custom-button>
      <custom-button @click="addText('*')">
        *
      </custom-button>
      <custom-button @click="addText('4')">
        4
      </custom-button>
      <custom-button @click="addText('5')">
        5
      </custom-button>
      <custom-button @click="addText('6')">
        6
      </custom-button>
      <custom-button @click="addText('-')">
        -
      </custom-button>
      <custom-button @click="addText('1')">
        1
      </custom-button>
      <custom-button @click="addText('2')">
        2
      </custom-button>
      <custom-button @click="addText('3')">
        3
      </custom-button>
      <custom-button @click="addText('+')">
        +
      </custom-button>
      <custom-button @click="addText('0')" class="col-span-2">
        0
      </custom-button>
      <custom-button @click="evaluate()" class="col-span-2">
        =
      </custom-button>
    </div>
  </div>
</template>

<script setup lang="ts">
let input = ref<string>("");

function allClear(): void {
  input.value = "";
}

function clearLast(): void {
  input.value = input.value.substring(0, input.value.length - 1);
}

function addText(value: string): void {
  input.value = `${input.value}${value}`;
}

function evaluate(): void {
  input.value = useCalculator(input.value).toString();
}

useHead({
  bodyAttrs: { class: 'bg-gray-400' }
})
</script>

<style></style>