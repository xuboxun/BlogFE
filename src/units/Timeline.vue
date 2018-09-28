<template>
    <div class="u-timeline">
        <div class="timeline-item" v-for="(item, index) in data" :key="index">
            <div class="item-bar">
                <div class="dot" :class="'dot-' + type"></div>
                <div class="line"></div>
            </div>
            <div class="item-content">
                <p class="title">{{item.time}} {{item.title}}</p>
                <div class="content">
                    <p v-if="typeof item.content === 'string'">{{item.content}}</p>
                    <ul v-else>
                        <li class="content-li" v-for="(li, index) in item.content" :key="index">{{li}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            // 点类型：circle空心圆，disc实心圆
            type: String,
            default: 'circle',
            validator: function(val) {
                return ['circle', 'disc'].indexOf(val) > -1;
            }
        },
        data: {
            type: Array,
            default: () => {
                return [
                    {
                        title: '测试标题1',
                        content: '测试内容1'
                    },
                    {
                        title: '测试标题2',
                        content: '测试内容2'
                    }
                ];
            }
        }
    }
};
</script>

<style lang="scss">
.u-timeline {
    .timeline-item {
        min-height: 50px;
        display: flex;
        position: relative;

        .item-bar {
            width: 20px;
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 4px;

            .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;                
            }
            .dot-circle {
                border: 1px solid #2d8cf0;
            }
            .dot-disc {
                background: #5cadff;
            }
            .line {
                width: 1px;
                flex-grow: 1;
                background: #dcdee2;
            }
        }
        &:last-child .item-bar .line {
            display: none;
        }
        .item-content {
            display: inline-block;
            min-width: 200px;
            padding-left: 5px;
            padding-bottom: 20px;

            .title {
                line-height: 1.5rem;
                font-size: 1rem;
                margin-bottom: 10px;
                color: #515a6e;
            }
            .content {
                font-size: 0.9rem;
                color: #808695;

                ul {
                    padding-left: 20px;
                }
                .content-li {
                    line-height: 25px;
                    list-style-type: circle;
                }
            }
        }

    }
}
</style>
