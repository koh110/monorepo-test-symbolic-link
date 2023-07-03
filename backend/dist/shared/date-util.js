import dayjs from 'dayjs';
export const toFormatString = (date) => {
    return dayjs(date).format('YYYY/MM/DD');
};
