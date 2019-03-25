<template>
    <div class="uploader">
        <div class="action-btn" v-on:click="onClickUpload">
            <slot></slot>
        </div>
        <div class="tips">
            <slot name="tips"></slot>
        </div>
        <!--<div>-->
            <!--<img :src="url" alt="">-->
        <!--</div>-->
        <!--<div ref="temp" style="{width:0; height: 0; overflow: hidden;}"></div>-->

        <ul>
            <li v-for="item in fileList" :key="item.name">
                {{ item.name }}
                <img :src="item.url" alt="">
                <Button v-on:click="onRemove(item.name)">删除</Button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Button from '../Button/button';
    export default {
        name: "g-uploader",
        components: {
            Button
        },
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
            },
            fileList: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },
        data() {
            return {
                url: 'about:blank'
            }
        },
        methods: {
            onRemove (name) {
                const copy = [...this.fileList];
                const index = copy.indexOf(name);
                copy.splice(index, 1);
                this.$emit('update:fileList', copy);
            },
            createInput () {
                const input = document.createElement('input');
                input.type = 'file';
                // this.$refs.temp.appendChild(input);
                return input;
            },
            uploadFile(file) {

                const formData = new FormData();
                formData.append(this.name, file);

                this.doUploadFile(formData, file);
            },
            uploadSuccess(response) {
                this.url = this.parseResponse(response);
            },
            doUploadFile(formData, file) {
                const xhr = new XMLHttpRequest();
                xhr.open(this.method.toUpperCase(), this.action);
                xhr.onload = () => {
                    this.uploadSuccess(xhr.response);
                    this.updateFileList(file)
                };
                xhr.send(formData);
            },
            updateFileList (file) {
                let { name, type, size } = file;
                while (this.fileList.filter((item) => {
                    return item.name === name;
                }).length > 0) {
                    const dotIndex = name.lastIndexOf('.');
                    const postfix = name.substring(dotIndex);
                    const prefix = name.substring(0, dotIndex);
                    name = prefix + '(1)' + postfix;
                }
                this.$emit('update:fileList', [...this.fileList, {name, type, size, url: this.url}]);
            },
            onClickUpload() {
                const input = this.createInput();
                const onInputChange = () => {
                    const file = input.files[0];

                    this.uploadFile(file);
                };
                input.addEventListener('change',onInputChange);

                input.click();
                input.remove();
            }
        }
    }
</script>

<style scoped lang="scss">
    .uploader {
        /*border: 1px solid red;*/
    }
</style>
