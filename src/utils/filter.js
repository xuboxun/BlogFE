import moment from 'moment';

let Filter = {
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