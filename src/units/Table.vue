<template>
    <div class="u-table">
        <table>
            <thead>
                <tr>
                    <th>item</th>
                    <th>item</th>
                    <th>item</th>
                    <th>item</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                    <td>content</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        columns: {
            type: Array,
            default: function() {
                return [];
            }
        },
        data: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {

        };
    },

};
</script>

<style lang="scss" scoped>
.u-table {
    width: 100%;
    height: 100%;
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #dcdee2;

        thead {
            th {
                color: #515a6e;
                background: #f8f8f9;
                border-bottom: 1px solid #e8eaec;
            }
        }
        th, td {
            height: 40px;
            text-align: center;
        }
        tbody {
            tr {
                border-bottom: 1px solid  #e8eaec;
            }
            tr:last-child {
                border: 0;
            }
        }
    }

}
</style>