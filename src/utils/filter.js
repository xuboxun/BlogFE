import moment from 'moment';

let Filter = {
    time: function(input, format) {
        if (!format) {
            return moment(input).format('YYYY-MM-DD');
        } else {
            return moment(input).format(format);
        }
    },
};

export default Filter;