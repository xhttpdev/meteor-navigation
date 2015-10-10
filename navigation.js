Navigation = {
    settings: {
        brand: null,
        fixed: true,
        fixedPos: 'top',
        inverse: false,
        showLogout: false,
        showAccount: false
    },

    /**
     * @param {Object} config
     */
    config: function (config) {
        this.settings = _.extend(this.settings, config);
    }
};
