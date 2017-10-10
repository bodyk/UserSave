export const UserSorter = {
    desc: (data, key) => {
        var result = data.sort(function (_a, _b) {
            const a = _a[ key];
            const b = _b[key];
            if (a <= b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });
        return result;
    },

    asc: (data, key) => {
        return data.sort(function (_a, _b) {
            const a = _a[key];
            const b = _b[key];
            if (a >= b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        })
    }
};