<template>
    <div class="uploader">
        <div class="action-btn" v-on:click="onClickUpload">
            <slot></slot>
        </div>
        <div class="tips">
            <slot name="tips"></slot>
        </div>
        <div>
            <img :src="url" alt="">
        </div>
        <!--<div ref="temp" style="{width:0; height: 0; overflow: hidden;}"></div>-->
    </div>
</template>

<script>
    export default {
        name: "g-uploader",
        props: {
            method: {
                type: String,
                default: 'POST'
            },
            action: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            accept: {
                type: String,
            },
            parseResponse: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                url: 'about:blank'
            }
        },
        methods: {
            createInput () {
                const input = document.createElement('input');
                input.type = 'file';
                // this.$refs.temp.appendChild(input);
                return input;
            },
            uploadFile(file) {

                const formData = new FormData();
                formData.append(this.name, file);
                this.doUploadFile(formData);
            },
            uploadSuccess(response) {
                this.url = this.parseResponse(response);
            },
            doUploadFile(formData) {
                const xhr = new XMLHttpRequest();
                xhr.open(this.method.toUpperCase(), this.action);
                xhr.onload = () => {
                    this.uploadSuccess(xhr.response)
                };
                xhr.send(formData);
            },
            onClickUpload() {
                const input = this.createInput();
                input.addEventListener('change', () => {
                    const file = input.files[0];
                    this.uploadFile(file);
                });

                input.click();
                input.remove();
            }
        }
    }
</script>

<style scoped lang="scss">
    .uploader {
        border: 1px solid red;
    }
</style>
