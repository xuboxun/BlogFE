import moment from 'moment';
import Const from './const';

let Filter = {
    blogType: function(key) {
        let typeName = Const.blogType[key];
        if (typeName) {
            return typeName;
        }
        return '未知类型';
    },
    time: function(input, format) {
        if (!format) {
            return moment(input).format('YYYY-MM-DD');
        } else {
            return moment(input).format(format);
        }
    },
    yearMonth: function(val) {
        val = typeof val === 'string' ? val : '' + val;
        return val.substr(0, 4) + '年' + val.substr(4) + '月';
    }
};

export default Filter;