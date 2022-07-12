<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnk404',
    extends: gnkComponent,
    props: {
        title: {
            type: String,
            required: false,
            default: "404",
        },
        label: {
            type: String,
            required: false,
            default: "Oops something went wrong :(",
        },
        showGoBack: {
            type: Boolean,
            required: false,
            default: true,
        },
        goBackLable: {
            type: String,
            required: false,
            default: "go back",
        },

    },
    mounted() {
        
    },

}
</script>
<template>
    <div :id="componentId" :class="[componentName, componentClassObject, componentGeneralClasses]">
        <div class="grid fill">
            <row class="fill"></row>
            <div class="row">
                <div class="col-12 flex-centered">
                    <h1 class="P404-500">
                        {{ title }}
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 flex-centered">
                    {{ label }}
                </div>
            </div>
            <div class="row">
                <div v-if="showGoBack" class="col-12 flex-centered p-t-20">
                    <gnk-button success @click="$router.go(-1)">

                        <span class="material-symbols-rounded">
                            chevron_left
                        </span>
                        {{ goBackLable }}
                    </gnk-button>
                </div>
            </div>
            <row class="fill"></row>
        </div>
    </div>
</template>
<style lang="scss">



.gnk404 {
    background: -color('LEVEL-0');
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    
    .P404-500 {
            font-size: calc(20vw + 10vh + 5vmin);
            line-height: calc(20vw + 10vh + 5vmin);
            font-weight: 700;
            color: -color('TEXT');
            margin: 0;
    }
}
</style>

