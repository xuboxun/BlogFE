<template>
    <div class="u-table">
        <table>
            <thead>
                <tr>
                    <th
                        v-for="column in columns"
                        :key="column.key"
                        :class="computeColumnAlign(column)"
                    >
                        {{column.key}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td
                        v-for="(column, columnIndex) in columns"
                        :key="columnIndex"
                        :class="computeColumnAlign(column)"
                    >
                        {{
                            !column.render ? row[column.key] : column.render(row[column.key], rowIndex, row)
                        }}
                    </td>
                </tr>
                <tr v-if="data.length === 0">
                    <td :colspan="columns.length">no data</td>
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
    methods: {
        computeColumnAlign(column) {
            return column.align ? 'align-' + column.align : 'align-left';
        }
    }

};
</script>

<style lang="scss" scoped>
.u-table {
    width: 100%;
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

        tbody {
            tr {
                border-bottom: 1px solid  #e8eaec;
            }
            tr:last-child {
                border: 0;
            }
        }

        th, td {
            height: 40px;
            text-align: center;
            padding: 0 10px;
        }

        .align-left {
            text-align: left;
        }
        .align-center {
            text-align: center;
        }
        .align-right {
            text-align: right;
        }
    }

}
</style>