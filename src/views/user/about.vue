<template>
    <div class="v-about">
        <div class="about-me">
            <h2 class="section-title">关于我</h2>
            <div class="section-content">
                <p v-for="(item, index) in intro" :key="index">
                    <font>{{ item.key }}：</font>{{ item.value }}
                </p>
            </div>
        </div>
        <div class="about-system">
            <h2 class="section-title">关于系统</h2>
            <div class="section-content">
                <Timeline :data="versions"></Timeline>
            </div>
        </div>
    </div>
</template>

<script>
import Timeline from '@/units/Timeline.vue';
import Filter from '@/utils/filter.js';
import { getVersionList } from '@/service/system';

export default {
    components: {
        Timeline,
    },
    data() {
        return {
            versions: [],
            intro: [
                { key: '姓名', value: '徐博勋' },
                { key: '属性', value: '程序猿, 文艺青年' },
                { key: '性别', value: '男, 单身求撩o((>ω<))o' },
                { key: '生日', value: '1997年1月19日' },
                { key: '邮箱', value: 'ixuboxun@163.com' },
                { key: '童年', value: '江南水乡, 安徽铜陵' },
                { key: '我的大学', value: '武汉, 华中农业大学, 计算机科学与技术' },
                { key: '在人间', value: '浙江, 杭州, 滨江区' },
                { key: '喜欢的话', value: '你心中的火焰，灼烧的不仅是你的内心，还会成为照亮世界的光，温暖他人' },
                { key: '书', value: '沉默的大多数, 看见' },
                { key: '影', value: '无问西东' },
                { key: '音', value: '网易云音乐, 没有绝对喜欢的歌, 听着好听都喜欢, 偏好老一点的和eason的歌' },
            ]
        };
    },
    created() {
        getVersionList().then(res => {
            if (res.data.code === 200) {
                let items = res.data.result.items;
                this.versions = items.map(item => {
                    return {
                        title: 'Version ' + item.version,
                        content: item.description.split('。'),
                        time: Filter.time(item.createTime),
                    };
                });
            }
        });
    }
};
</script>

<style lang="scss">
.v-about {
    .section-title {
        font-size: 1.2rem;
        font-weight: 400;
        color: #17233d;
        margin-bottom: 10px;
    }
    .section-content {
        padding: 10px 0 20px 10px;
        p {
            color: #888;
            margin-bottom: 15px;
            line-height: 22px;
            font {
                color: #666;
            }
        }
    }
    .about-me {

    }
    .about-system {

    }
}
</style>


