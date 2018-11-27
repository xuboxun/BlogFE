<template>
    <div class="v-admin-editor">
        <LocateBar>
            <Button @click="saveDraft">保存草稿</Button>
            <Button @click="submit">{{ this.editFlag ? '提交编辑' : '发布博客' }}</Button>
        </LocateBar>
        <div class="blog-editor-wrapper">
            <BlogEditor v-model="blog" ref="editor"></BlogEditor>
        </div>
    </div>
</template>

<script>
import BlogEditor from '@/components/BlogEditor';
import { addBlog, updateBlog, getBlogDetail } from '@/service/blog';

export default {
    components: {
        BlogEditor
    },
    data: function () {
        return {
            blogId: '',
            blog: {},
            editFlag: false,
        };
    },
    methods: {
        saveDraft() {
            if (this.$refs.editor.checkData()) {
                console.log(this.blog);
            }
        },
        submit() {
            if (this.$refs.editor.checkData()) {
                if (this.editFlag) {
                    this.editBlog();
                } else {
                    this.createBlog();
                }
            }
        },
        createBlog() {
            addBlog(this.blog).then(res => {
                if (res.data.code === 200) {
                    console.log('添加成功');
                    this.$router.push({
                        name: 'admin/blog/list'
                    });
                } else {
                    console.log('add error');
                }
            });
        },
        editBlog() {
            console.log('更新');
            updateBlog({
                id: this.blogId,
                ...this.blog
            }).then(res => {
                if (res.data.code === 200) {
                    console.log('编辑成功');
                    this.$router.push({
                        name: 'admin/blog/list'
                    });
                } else {
                    console.log(res.data);
                }
            });
        },
        searchBlog() {
            getBlogDetail(this.$route.params.name).then(res => {
                if (res.data.code === 200) {
                    let blog = res.data.result;
                    this.blogId = blog.id;
                    this.blog = {
                        name: blog.name,
                        title: blog.title,
                        content: blog.content,
                        type: blog.type,
                        tagIds: blog.type !== 'serial' ? blog.tags.map(tag => tag.id) : [],
                        serialId: blog.type === 'serial' ? blog.serial.id : ''
                    };

                }
            });
        }
    },
    created() {
        this.editFlag = this.$route.name === 'admin/blog/edit';
        if (this.editFlag) {
            this.searchBlog();
        }
    }
};
</script>

<style lang="scss" scoped>
.v-admin-editor {
    .blog-editor-wrapper {
        height: calc(100% - 70px);
        width: 100%;
    }
}
</style>