<template>
    <div>
        <g-button>
            默认按钮
        </g-button>

        <g-button icon="setting">
            图标按钮
        </g-button>

        <g-button loading>
            图标按钮
        </g-button>

        <g-button disabled>
            不可点击
        </g-button>

        <pre>
            <code>
                {{ content }}
            </code>
        </pre>
    </div>
</template>


<script>
    import Button from '../../../src/Button/button';
    export default {
        components: {
            'vue-button': Button,
        },
        data() {
            return {
                content: `
                    <g-button>
                        默认按钮
                    </g-button>

                    <g-button icon="setting">
                        图标按钮
                    </g-button>

                    <g-button loading>
                        图标按钮
                    </g-button>

                    <g-button disabled>
                        不可点击
                    </g-button>
                `
                    
            }
        }
    }
</script>
