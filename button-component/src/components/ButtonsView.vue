<template>
    <div class="grid grid-cols-4 gap-5">
        <span class="col-span-4 text-[#4F4F4F] font-['Poppins'] text-xl/normal font-medium">Buttons</span>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-4">&lt;Button /&gt;</span>
        <div>
            <ButtonComponent caption="Default"/>
        </div>
        <span class="col-span-3"></span>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button variant=”outline” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button variant=”outline” color=”primary” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button variant=”outline” color=”secondary” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button variant=”outline” color=”danger” /&gt;</span>
        <div>
            <ButtonComponent caption="Default" variant="outline"/>
        </div>
        <div>
            <ButtonComponent caption="Default" variant="outline" color="primary"/>
        </div>
        <div>
            <ButtonComponent caption="Default" variant="outline" color="secondary"/>
        </div>
        <div>
            <ButtonComponent caption="Default" variant="outline" color="danger"/>
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-4">&lt;Button variant=”text” /&gt;</span>
        <div>
            <ButtonComponent caption="Default" variant="text"/>
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-4">&lt;Button disableShadow /&gt;</span>
        <div class="col-span-4">
            <ButtonComponent caption="Default" disableShadow />
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button disabled /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-3">&lt;Button disabled variant=”text” /&gt;</span>
        <div>
            <ButtonComponent caption="Default" disabled />
        </div>
        <div class="col-span-3">
            <ButtonComponent caption="Default" disabled variant="text" />
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-2">&lt;Button startIcon=”face” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-2">&lt;Button endIcon =”add_shopping_car” /&gt;</span>
        <div class="col-span-2">
            <ButtonComponent caption="Default" startIcon="face" />
        </div>
        <div class="col-span-2">
            <ButtonComponent caption="Default" color="primary" endIcon="add_shopping_cart" />
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button size=”sm” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button size=”md” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal col-span-2">&lt;Button size=”lg” /&gt;</span>
        <div>
            <ButtonComponent caption="Default" size="sm"/>
        </div>
        <div>
            <ButtonComponent caption="Default" size="md" />
        </div>
        <div class="col-span-2">
            <ButtonComponent caption="Default" size="lg"/>
        </div>

        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button color=”default” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button color=”primary” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button color=”secondary” /&gt;</span>
        <span class="text-[#333] font-['Ubuntu_Mono'] text-xs/normal">&lt;Button color=”danger” /&gt;</span>
        <div>
            <ButtonComponent caption="Default" color="default"/>
        </div>
        <div>
            <ButtonComponent caption="Default" color="primary"/>
        </div>
        <div>
            <ButtonComponent caption="Default" color="secondary"/>
        </div>
        <div>
            <ButtonComponent caption="Default" color="danger"/>
        </div>

        <span class="font-['Montserrat'] text-[14px]/normal font-bold underline text-gray-400 col-span-4">created by Ragry - devChallenges.io</span>
    </div>
</template>

<script setup lang="ts">
import ButtonComponent from './button/ButtonComponent.vue';
</script>