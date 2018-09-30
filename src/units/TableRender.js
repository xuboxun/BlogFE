
export default {
    name: 'TableRender',
    functional: true,
    props: {
        render: Function,
        params: Object
    },
    render: (h, ctx) => {
        return ctx.props.render(h, ctx.props.params);
    }
};